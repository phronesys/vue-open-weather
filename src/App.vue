<template>
  <div class="app">
    <section class="head">
      <h1>Select your cli-mate</h1>
      <form class="head__search">
        <input type="text" id="region" />
        <label for="region"></label>
      </form>
    </section>
    <section class="main">
      <div class="main__text">
        <h2 class="main__header">{{ data.name }}</h2>
        <h4 class="main__temp">{{ data.temp }}°</h4>
        <p class="main__description">{{ data.weather }}</p>
      </div>
      <div class="main__icon-box">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="logo"
          class="main__icon"
        />
      </div>
    </section>
  </div>
</template>

<script>
import config from "./config";
export default {
  data() {
    return {
      data: {
        name: "",
        temp: null,
        weather: "",
        description: "",
        icon: "",
      },
    };
  },
  methods: {},
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
        this.data.weather = response.data.weather[0].main;
        this.data.description = response.data.weather[0].description;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},
};
</script>

<style lang="scss">
.app {
  display: block;
  height: 40rem;
  @include absolute-center;
}
.head {

  font-size: 20px;
  display: block;
  width: 25rem;
  height: 10rem;
}

.main {
  display: block;
  position: relative;
  width: 25rem;
  height: 30rem;
  background-image: url("./images/rain.jpg");
  background-size: cover;
  background-position: top;

  box-shadow: 1rem 2rem 3rem rgba($color-black, 0.8);
  border-radius: 5px;
  color: $color-white;
  &__text {
    @include absolute-center;
    background-color: $color-white;
    color: #333333;
    padding: 1rem 2rem;
    width: 15rem;
    border-radius: 5px;
    box-shadow: 1rem 2rem 3rem rgba($color-black, 0.8);
    transition: all 0.3s;
    &:hover {
      transform: translate(-50%, -55%) scale(1.03);
    }
  }
  &__icon-box {
    position: absolute;
    right: 2rem;
    top: 2rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background-color: $color-white;

    overflow: hidden;
    box-shadow: 1rem 2rem 3rem rgba(#000000, 0.6);
  }
  &__icon {
    width: 3rem;
    margin-top: 0.3rem;
    @include absolute-center;
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
body {
  background-image: linear-gradient(
    to right,
    rgba(#888, 0.4),
    rgba(#2c3e50, 0.8)
  );
  background-size: cover;
}
html {
}
</style>
