<template>
  <div class="information">
    <div class="name border-bottom">
      <div class="names">游客1</div>
      <input class="inp" type="text" placeholder="游客名字">
    </div>
    <div class="name border-bottom">
      <div class="names">手机号</div>
      <input class="inp" type="text" placeholder="请填写手机号">
    </div>
  </div>
</template>

<script>
export default {
  name: 'payment'
}
</script>

<style lang="stylus" scoped>
  .information
    background: #fff
    margin-top: .2rem
    .name
      display: flex
      padding: .3rem .2rem
      .names
        flex: 3
        font-size: .3rem
        line-height: .5rem
      .inp
        flex: 8
        font-size: .3rem
</style>
