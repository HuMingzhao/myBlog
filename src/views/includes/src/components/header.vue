<template>
    <header class="share-header">
      <h1 class="share-header-logo">
          <a href="#">
              <img src="" alt="Tu"/>
          </a>
      </h1>
      <p class="site-desc">hmz.com</p>
      <nav class="share-nav-container">
          <div class="nav-toggle">
          </div>
          <div class="nav-wrap">
              <ul class="menu-header">
                  <li class="">
                      <a href="#">Home</a>
                  </li>
                  <li class="">
                    <a href="#">Blog</a>
                  </li>
                  <li class="">
                    <a href="#">Music</a>
                  </li>
                  <li class="">
                    <a href="#">Video</a>
                  </li>
              </ul>
          </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.share-header {
    background: #fff;
    position: relative;
    z-index: 99;
    padding: 0 40px;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    height: 80px;

    .share-header-logo {
        float: left;
        font-size: 36px;
        font-weight: 300;
        letter-spacing: -.5px;
        line-height: 60px;
        padding: 10px 0;
        position: relative;
        z-index: 2;
    }
    .site-desc {
        float: left;
        font-size: 16px;
        font-weight: 300;
        color: #aaa;
        margin: 30px 0 0 20px;
        position: relative;
        z-index: 2;
    }
    .share-nav-container {
        background: 0 0;
        float: right;
        margin: 12px 0 0;
    }
    .menu-header li {
        display: inline-block;
        margin-right: 24px;
        padding: 18px 0;
    }
}
</style>
