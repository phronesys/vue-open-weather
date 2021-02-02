<template>
  <div class="background" :style="{backgroundImage: `url(${theUrl}), ${gradient}`}"></div>
  <base-style>
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
  </base-style>
</template>

<script>
import config from "./config.js";
import BaseCard from "./components/layout/BaseCard.vue";
import BaseStyle from "./components/layout/BaseStyle.vue";
export default {
  components: {
    BaseCard,
    BaseStyle,
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
      theUrl: "rain-back.jpg",
      gradient: "linear-gradient(90deg, rgba($color-black, 0.8) 70%, transparent 25%)"
    };
  },
  methods: {
    updateUrl(){
      const w = this.data.weather.toLowerCase();
      console.log(w);
      this.theUrl = `./images/${w}-back.jpg`
      console.log(this.theUrl);
    },
    getNewData(search) {
      console.log(search);
      this.getData(search);
      this.updateUrl();
    },
    getData(search) {
      if (search == null) {
        search = "santiago,cl";
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
  mounted() {
    // this.$root.$once('body-background-image', function(url){
    //   document.body.style.backgroundImage = url;
    // })
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss">
.background {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba($color-black, 0.8) 70%,
      transparent 25%
    ),
    url("./images/clouds-back.jpg");
  background-size: cover;
  background-position: top;
  position: fixed;
  &--clouds {

  }
  &--rain {
    
  }
}
</style>


