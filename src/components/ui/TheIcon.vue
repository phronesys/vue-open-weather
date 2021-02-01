// icon logic
<template>
  <div class="icon-box">
    <img
      src="http://openweathermap.org/img/wn/10d@2x.png"
      alt=""
      class="icon"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-box {
  display: block;
  margin: 1rem auto;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  box-shadow: 0 0 1rem rgba($color-black, $alpha: 1.0);
}
.icon {
  width: 6rem;
  display: block;
  margin: 0 auto;
}
</style>