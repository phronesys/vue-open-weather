<template>
  <section class="main-content">
    <div class="main-content__text">
      <h2 class="main-content__header">Santiago de Chile</h2>
      <h4 class="main-content__temp">5°</h4>
    </div>
    <div class="main-content__icon-box">
      <img src="@/assets/logo.png" alt="logo" class="main-content__icon" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      xml: "",
    };
  },
  mounted() {
    this.axios.get("http://api.meteored.cl/index.php?api_lang=cl&localidad=18578&affiliate_id=tb26q4vkytw7")
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    }) 
    // const handler = () =>
    //   fetch("/functions/node-fetch", {
    //     headers: { accept: "Accept: application/json" },
    //   })
    //     .then((x) => x.json())
    //     .then(({ msg }) => console.log(msg));
    // console.log(handler);
  },
};
</script>

<style lang="scss">
.main-content {
  display: inline;
  @include position-center;
  width: 60%;

  box-shadow: 1rem 2rem 3rem rgba($color-black, 0.8);
  border-radius: 5px;
  text-align: center;
  &__text {
    display: inline;
  }
  &__icon {
    width: 3rem;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
