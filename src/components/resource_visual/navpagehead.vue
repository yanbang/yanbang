<template>
  <div class="header">
    <div class="header-bg"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}
.header-bg {
    position: absolute;
    left: 0;
    top: 13vh;
    width: 100%;
    height: 98px;
    z-index: 100;
    background-image: url('~@/assets/zj/navigation/dbtitle.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
