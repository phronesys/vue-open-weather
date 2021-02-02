<template>
  <div :class="background"></div>
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
    };
  },
  computed: {
    background() {
      return `background--${this.data.weather.toLowerCase()}`
    }
  },
  methods: {
    getNewData(search) {
      console.log(search);
      this.getData(search);
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
  &--ash {
    @include background--ash;
  }
  &--clear {
    @include background--clear;
  }
  &--clouds {
    @include background--clouds;
  }

  &--drizzle {
    @include background--drizzle;
  }

  &--dust {
    @include background--dust;
  }

  &--fog {
    @include background--fog;
  }

  &--haze {
    @include background--haze;
  }

  &--mist {
    @include background--mist;
  }
  &--rain {
    @include background--rain;
  }

  &--sand {
    @include background--sand;
  }

  &--smoke {
    @include background--smoke;
  }

  &--snow {
    @include background--snow;
  }
  &--squall {
    @include background--squall;
  }

  &--thunderstorm {
    @include background--thunderstorm;
  }

  &--tornado {
    @include background--tornado;
  }
}
</style>


