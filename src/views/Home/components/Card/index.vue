<template>
    <ul class="card-wrapper">
        <li class="card-item" v-for="item in 5" :key="item">
            <div class="card-item-left">
                <div class="card-category">
                    <a href="#">2019-nCoV</a>
                    <a href="#">新冠状病毒</a>
                </div>
                <h3 class="card-title text-overflow">
                    <a href="">
                        <span class="Recommend">【推荐】</span>【心系武汉】疫情实时数据
                    </a>
                </h3>
                <div class="card-content">
                  <p>##心系武汉，关注疫情&amp;lt;iframe height=1080 width=780 src=&amp;quot;https:</p>
                </div>
                <div class="card-meta">
                    <div class="card-meta-author">
                        By
                        <i class="el-icon-time"></i>
                        <a class="meta-author-link" href="">Heanny</a>
                    </div>
                    <div class="card-meta-date">
                        <i class="el-icon-time"></i>
                        <a href="" title="5月前">5月前</a>
                    </div>
                    <div class="card-meta-read">
                        <i class="el-icon-view"></i>
                        1341 read
                    </div>
                </div>
            </div>

            <div class="card-item-right" data-img="">
                <a class="card-featured-img" href="">
                    <img src="" />
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss">
    a {
        color: inherit;
        text-decoration: none;
    }
    .text-overflow {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .Recommend {
      color: red;
    }

    .card-item {
        display: table;
        table-layout: fixed;
        width: 100%;
        margin-bottom: 50px;

        .card-item-left {
            width: 61.8%;
            padding: 3rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-right: none;
            transition: border 200ms ease;
            display: table-cell;
            vertical-align: top;

            .card-category {
                font-size: 0.875rem;
                text-transform: uppercase;
                font-weight: 700;
                line-height: 1.5;
                color: #51cbce;

                a {
                  margin-right: 10px;
                }
            }

            .card-title {
                margin-bottom: 1.5rem;
            }
            .card-content {
                margin-bottom: 10px;
            }
            .card-content p {
                color: #6e6e6e;
                width: 90%;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }

            .card-meta {
                font-size: 0.8rem;
                text-transform: uppercase;
                line-height: 1;

                div {
                    display: inline-block;
                    margin-right: 20px;
                    color: #6e6e6e;
                }
            }
        }
        .card-item-right {
            position: relative;
            width: 38.2%;
            background-size: cover;
            background-attachment: scroll;
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
            background-color: rgb(206, 202, 202);
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-left: none;
            height: 100%;
            display: table-cell;
            vertical-align: top;
        }
    }
</style>
