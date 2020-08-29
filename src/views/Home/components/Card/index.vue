<template>
    <ul class="card-wrapper">
        <li class="card-item">
            <div class="card-item-left">
                <div class="card-category">
                    <a href="#">2020-blog</a>
                    <a href="#">学习笔记</a>
                </div>
                <h3 class="card-title text-overflow">
                    <a href="/hmzblog/blog/">
                        <span class="Recommend">【推荐】</span>【NGINX】项目上线
                    </a>
                </h3>
                <div class="card-content">
                  <p>将项目部署到线上的服务器</p>
                </div>
                <div class="card-meta">
                    <div class="card-meta-author">
                        By
                        <i class="el-icon-time"></i>
                        <a class="meta-author-link" href="javascript:;">Sugar</a>
                    </div>
                    <div class="card-meta-date">
                        <i class="el-icon-time"></i>
                        <a href="javascript:;" title="5月前">2020/08/20</a>
                    </div>
                    <!--<div class="card-meta-read">
                        <i class="el-icon-view"></i>
                        1341 read
                    </div>-->
                </div>
            </div>

            <div class="card-item-right">
                <a class="card-featured-img" href="/hmzblog/blog/">
                   <img src="@assets/img/timg.jpg" />
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
        transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;

        a {
            color: #51cbce;
            transition: color 0.2s linear;
            text-decoration: none;

            &:hover,
            &:focus {
                color: #2ba9cd;
            }
        }

        &:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.20);
            transform: translateY(-10px);
        }

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
                // text-transform: uppercase;
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

            .card-featured-img {
                width: 100%;
                display: block;
                padding-top: 68.73%;
                position: relative;
            }
            .card-featured-img img {
                width: 100%;
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
            }
        }

        @media only screen and (max-width: 999px) {
            .card-item-left,
            .card-item-right {
                display: block;
                width: 100%;
                box-sizing: border-box;
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
