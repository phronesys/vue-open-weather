// card skeleton

<template>
  <div :class="main">
    <the-search
      class="main__search"
      @to-app="sendToApp"
      :weather="weather"
    ></the-search>
    <the-icon class="main__icon" :clima="clima"></the-icon>
    <the-data
      class="main__data"
      :city="city"
      :min="min"
      :max="max"
      :temperature="temperature"
      :humidity="humidity"
      :weather="weather"
      :description="description"
      :country="country"
    ></the-data>
  </div>
</template>

<script>
import TheSearch from "../ui/TheSearch";
import TheIcon from "../ui/TheIcon";
import TheData from "../ui/TheData";
export default {
  components: {
    TheSearch,
    TheIcon,
    TheData,
  },
  props: [
    "city",
    "temperature",
    "humidity",
    "weather",
    "description",
    "country",
    "min",
    "max",
    "clima",
  ],
  computed: {
    main(){
      return `main--${this.weather.toLowerCase()}`;
    }
  },
  emits: ["toApp"],
  methods: {
    sendToApp(search) {
      this.$emit("toApp", search);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  &--ash {
    @include main--ash;
  }
  &--clear {
    @include main--clear;
  }
  &--clouds {
    @include main--clouds;
  }
  &--drizzle {
    @include main--drizzle;
  }
  &--dust {
    @include main--dust;
  }
  &--fog {
    @include main--fog;
  }
  &--haze {
    @include main--haze;
  }
  &--mist {
    @include main--mist;
  }
  &--rain {
    @include main--rain;
  }
  &--sand {
    @include main--sand;
  }
  &--smoke {
    @include main--smoke;
  }
  &--snow {
    @include main--snow;
  }
  &--squall {
    @include main--squall;
  }
  &--thunderstorm {
    @include main--thunderstorm;
  }
  &--tornado {
    @include main--tornado;
  }
}
</style>