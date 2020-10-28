# 文件上传

## 文件上传的几种方式

### 表单上传
```html
<form action="/index.php" method="POST" enctype="multipart/form-data">
  <input type="file" name="myfile">
  <input type="submit">
</form>
```
构建文件上传的表单，指定表单的提交内容类型为`enctype="multipart/form-data"`，表明表单需要上传二进制数据。

### formData异步上传
FormData对象主要用来组装一组用 XMLHttpRequest发送请求的键/值对，可以更加灵活地发送Ajax请求。可以使用FormData来模拟表单提交。

```javascript
let files = e.target.files // 获取input的file对象
let formData = new FormData();
formData.append('file', file);
axios.post(url, formData);
```
服务端处理方式与直接form表单请求基本相同。

### File API 
早期的文件上传，对用户上传的文件操作非常有限，尤其是无法读取文件内容，使得很多需要操作文件的网页不得不用Flash这样的第三方插件来实现。

随着HTML5的普及，新增的File API允许JavaScript读取文件内容，获得更多的文件信息。
HTML5的File API提供了`File`和`FileReader`两个主要对象，可以获得文件信息并读取文件。

#### 文件编码上传

1. base64
 ```javascript
      const oFile = document.querySelector('#my-file')
		  oFile.addEventListener('change', (e) => {
			  let file = e.target.files[0]
			  let fileReader = new FileReader()
			  let type = file.type
			  fileReader.onload = () => {
			     console.log(fileReader.result)
		      }
		  fileReader.readAsDataURL(file)
	  })
 ```
 
 通过`fileReader.result`就可以拿到该文件的base64编码
 
2. 二进制
除了进行base64编码，还可以在前端直接读取文件内容后以二进制格式上传
```javascript
// 读取二进制文件
function readBinary(text){
   var data = new ArrayBuffer(text.length);
   var ui8a = new Uint8Array(data, 0);
   for (var i = 0; i < text.length; i++){ 
     ui8a[i] = (text.charCodeAt(i) & 0xff);
   }
   console.log(ui8a)
}

var reader = new FileReader();
reader.onload = function(){
	  readBinary(this.result) // 读取result或直接上传
}
// 把从input里读取的文件内容，放到fileReader的result字段里
reader.readAsBinaryString(file);
```


## 大数据上传

若文件有几百兆，甚至几个G，请求过程中会出现超时的问题

分析-----将大文件进行切割上传

编码方式上传中，在前端我们只要先获取文件的二进制内容，然后对其内容进行拆分，最后将每个切片上传到服务端即可。

在JavaScript中，文件FIle对象是Blob对象的子类，Blob对象包含一个重要的方法slice，通过这个方法，我们就可以对二进制文件进行拆分, 下面是一个拆分文件的示例：
```javascript
function slice(file, piece = 1024 * 1024 * 5) {
  let totalSize = file.size; // 文件总大小
  let start = 0; // 每次上传的开始字节
  let end = start + piece; // 每次上传的结尾字节
  let chunks = []
  while (start < totalSize) {
    // 根据长度截取每次需要上传的数据
    // File对象继承自Blob对象，因此包含slice方法
    let blob = file.slice(start, end); 
    chunks.push(blob)

    start = end;
    end = start + piece;
  }
  return chunks
}
```
将文件拆分成`piece`大小的分块，然后每次请求只需要上传这一个部分的分块即可。
```javascript
let file =  document.querySelector("[name=file]").files[0];

const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH); // 首先拆分切片

chunks.forEach(chunk=>{
  let fd = new FormData();
  fd.append("file", chunk);
  post('/mkblk.php', fd)
})
```
服务器接收到这些切片后，再将他们拼接起来就可以了。

#### 问题

1. 目前无法识别一个切片是属于哪一个切片的，当同时发生多个请求时，追加的文件内容会出错；
2. 切片上传接口是异步的，无法保证服务器接收到的切片是按照请求顺序拼接的。

解决办法：
* 确认所有切片都已上传，这个可以通过客户端在切片全部上传后调用mkfile接口来通知服务端进行拼接；
* 找到同一个context下的所有切片，确认每个切片的顺序，这个可以在每个切片上标记一个位置索引值；
* 按顺序拼接切片，还原成文件；
* 如何识别多个切片是来自于同一个文件的，这个可以在每个切片请求上传递一个相同文件的context参数。

上面有一个重要的参数，即`context`，我们需要获取为一个文件的唯一标识，可以通过
文件名、文件长度等基本信息进行拼接，为了避免多个用户上传相同的文件，可以再额外拼接用户信息如uid等保证唯一性

修改上传代码，增加相关参数
```javascript
// 获取context，同一个文件会返回相同的值
function createContext(file) {
 	return file.name + file.length
}

let file = document.querySelector("[name=file]").files[0];
const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH);

// 获取对于同一个文件，获取其的context
let context = createContext(file);

let tasks = [];
chunks.forEach((chunk, index) => {
  let fd = new FormData();
  fd.append("file", chunk);
  // 传递context
  fd.append("context", context);
  // 传递切片索引值
  fd.append("chunk", index + 1);
	
  tasks.push(post("/mkblk.php", fd));
});
// 所有切片上传完毕后，调用mkfile接口
Promise.all(tasks).then(res => {
  let fd = new FormData();
  fd.append("context", context);
  fd.append("chunks", chunks.length);
  post("/mkfile.php", fd).then(res => {
    console.log(res);
  });
});
```
这样就解决了上面的两个问题：
* 识别切片来源
* 保证切片拼接顺序


#### 断点续传
即使将大文件拆分成切片上传，我们仍需等待所有切片上传完毕，在等待过程中，可能发生一系列导致部分切片上传失败的情形，如网络故障、页面关闭等。由于切片未全部上传，因此无法通知服务端合成文件。这种情况下可以通过`断点续传`来进行处理。

断点续传指的是：可以从已经上传部分开始继续上传未完成的部分，而没有必要从头开始上传，节省上传时间。

由于整个上传过程是按切片维度进行的，且mkfile接口是在所有切片上传完成后由客户端主动调用的，因此断点续传的实现也十分简单：

* 在切片上传成功后，保存已上传的切片信息；
* 当下次传输相同文件时，遍历切片列表，只选择未上传的切片进行上传；
* 所有切片上传完毕后，再调用mkfile接口通知服务端进行文件合并。

因此问题就落在了如何保存已上传切片的信息了，保存一般有两种策略。

* 可以通过locaStorage等方式保存在前端浏览器中，这种方式不依赖于服务端，实现起来也比较方便，缺点在于如果用户清除了本地文件，会导致上传记录丢失；
* 服务端本身知道哪些切片已经上传，因此可以由服务端额外提供一个根据文件context查询已上传切片的接口，在上传文件前调用该文件的历史上传记录。

下面让我们通过在本地保存已上传切片记录，来实现断点上传的功能。

```javascript
function getUploadSliceRecord(context){
  let record = localStorage.getItem(context)
  if(!record){
    return []
  }else {
    try{
      return JSON.parse(record)
    }catch(e){}
  }
}
// 保存已上传切片
function saveUploadSliceRecord(context, sliceIndex){
  let list = getUploadSliceRecord(context)
  list.push(sliceIndex)
  localStorage.setItem(context, JSON.stringify(list))
}
```
然后对上传逻辑稍作修改，主要是增加上传前检测是已经上传、上传后保存记录的逻辑。

```javascript
let context = createContext(file);
// 获取上传记录
let record = getUploadSliceRecord(context);
let tasks = [];
chunks.forEach((chunk, index) => {
  // 已上传的切片则不再重新上传
  if(record.includes(index)){
    return
  }
	
  let fd = new FormData();
  fd.append("file", chunk);
  fd.append("context", context);
  fd.append("chunk", index + 1);

  let task = post("/mkblk.php", fd).then(res=>{
    // 上传成功后保存已上传切片记录
    saveUploadSliceRecord(context, index)
    record.push(index)
  })
  tasks.push(task);
});
```

此时上传时刷新页面或者关闭浏览器，再次上传相同文件时，之前已经上传成功的切片就不会再重新上传了。

服务端实现断点续传的逻辑基本相似，只要在`getUploadSliceRecord`内部调用服务端的查询接口获取已上传切片的记录即可，因此这里不再展开。

此外断点续传还需要考虑切片过期的情况：如果调用了mkfile接口，则磁盘上的切片内容就可以清除掉了，如果客户端一直不调用mkfile的接口，放任这些切片一直保存在磁盘显然是不可靠的，一般情况下，切片上传都有一段时间的有效期，超过该有效期，就会被清除掉。基于上述原因，断点续传也必须同步切片过期的实现逻辑。

本文参考自[NoManReady](https://juejin.im/post/6844903860327186445)的文章
