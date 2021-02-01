// icon logic
<template>
  <div class="icon-box">
    <img :src="url" alt="" class="icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    url() {
      if (this.clima == null) {
        return `http://openweathermap.org/img/wn/10d@2x.png`;
      } else {
        return `http://openweathermap.org/img/wn/${this.clima}@2x.png`;
      }
    },
  },
  props: ["clima"],
  // watch: {
  //   icon: function(newVal, oldVal) {

  //   }
  // }
};
</script>

<style lang="scss" scoped>
.icon-box {
  background-color: #333;
  display: block;
  margin: 1rem auto;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  box-shadow: 0 0 1rem rgba($color-black, $alpha: 1);
}
.icon {
  width: 6rem;
  display: block;
  margin: 0 auto;
}
</style>