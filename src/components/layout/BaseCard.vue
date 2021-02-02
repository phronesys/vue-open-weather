// card skeleton

<template>
  <div class="main">
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
  @include absolute-center;
  width: 22rem;
  height: 80vh;
  background-color: white;
  background-image: url("../../images/sand.jpg");
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1rem 2rem 3rem rgba($color-black, 0.6);

  &__search {
    margin: 0;
    position: relative;
    left: 0;
    top: 0;
  }
  &__icon {
    background-color: rgba(#555, 0.8);
  }
}
</style>