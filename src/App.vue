<template>
  <base-card
    :city="data.city"
    :temperature="data.temp"
    :min="data.min"
    :max="data.max"
    :humidity="data.humidity"
    :weather="data.weather"
    :description="data.description"
    :country="data.country"
    :clima="data.icon"
    @to-app="getNewData"
  ></base-card>
</template>

<script>
import config from "./config.js";
import BaseCard from "./components/layout/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      key: config.MY_API_KEY,
      data: {
        city: "",
        temp: null,
        weather: "",
        description: "",
        icon: "",
        country: "",
        humidity: null,
        max: "",
        min: "",
      },
    };
  },
  methods: {
    getNewData(search) {
      console.log(search);
      this.getData(search);
    },
    getData(search) {
      if(search == null) {
        search = "santiago,cl"
      }
      this.axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${this.key}&units=metric&lang=es`
        )
        .then((response) => {
          console.log(response);
          this.data.city = response.data.name;
          this.data.temp = response.data.main.temp;
          this.data.weather = response.data.weather[0].main;
          this.data.description = response.data.weather[0].description;
          this.data.icon = response.data.weather[0].icon;
          this.data.country = response.data.sys.country;
          this.data.humidity = response.data.main.humidity;
          this.data.max = response.data.main.temp_max;
          this.data.min = response.data.main.temp_min;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted(){
    
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  box-sizing: border-box;
}
html {
  min-height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba($color-black, 0.8) 70%,
      transparent 25%
    ),
    url("./images/cloud-back.jpg");
  background-size: cover;
}
</style>
