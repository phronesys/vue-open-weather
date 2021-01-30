<template>
  <section class="main-content">
    <div class="main-content__text">
      <h2 class="main-content__header">{{ data.name }}</h2>
      <h4 class="main-content__temp">{{ data.temp }}°</h4>
    </div>
    <div class="main-content__icon-box">
      <img src="@/assets/logo.png" alt="logo" class="main-content__icon" />
    </div>
  </section>
</template>

<script>
import config from "./config";
export default {
  data() {
    return {
      data: {
        name: "",
        temp: null,
      },
    };
  },
  created() {
    // this will be the default 
    this.axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=${config.MY_API_KEY}&units=metric`
      )
      .then((response) => {
        console.log(response);
        this.data.name = response.data.name;
        this.data.temp = response.data.main.temp;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},
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
