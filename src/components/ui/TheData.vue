<template>
  <div class="data">
    <div class="data__city">
      <h1>{{ city }}, {{ country }}</h1>
    </div>
    <div class="data__temp">
      <h1>{{ temperature }} C°</h1>
    </div>
    <ul>
      <li>Humidty: {{ humidity }}%</li>
      <li>Min: {{ min }} C°</li>
      <li>Max: {{ max }} C°</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    "city",
    "temperature",
    "humidity",
    "weather",
    "description",
    "country",
    "min",
    "max",
  ],
};
</script>

<style lang="scss" scoped>
.data {
  text-align: center;
  color: #222;
  background-color: rgba($color-white, .8);
  border-radius: 5px;
  margin: 1rem;
  &__city {
    margin-bottom: -1rem;
  }
  &__temp {
    font-size: 27px;
  }
  ul {
    list-style: none;
    width: 80%;
    // centering block element inside a block element
    position: relative;
    left: -.5rem;
    li {
      text-align: center;
      padding: .5rem;
      font-weight: bold;
      &:not(:last-child) {
        border-bottom: 1px solid #333;
      }
    }
  }
}
</style>