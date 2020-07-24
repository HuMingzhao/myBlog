<template>
    <section class="self-info-wrap">
        <div class="self-info-avatar">
            <img src="" alt="logo" width="130" height="130" />
        </div>
        <div class="self-info-right">
            <h2 class="self-info-name">Heanny Liu</h2>
            <div class="self-info-desc">Share some pic of my favorite or the pic i shoot or the pic i make.</div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ShareInfo'
}
</script>

<style>
    .self-info-wrap {
      padding: 20px 10px;
      overflow: hidden;
    }
    .self-info-avatar {
        float: left;
        border: 1px solid black;
        width: 130px;
        height: 130px;
    }
    .self-info-right {
        float: left;
        margin-left: 10px;
    }
</style>
