<template>
  <form class="search" @submit.prevent="sendToApp">
    <input
      type="text"
      id="search"
      class="search__input"
      placeholder="Santiago,cl"
      v-model="searching"
    />
  </form>
</template>

<script>
export default {
  emits: ['toApp'],
  data() {
    return {
      searching: "",
    };
  },
  methods: {
    sendToApp() {
      this.$emit("toApp", this.searching);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  overflow: hidden;
  margin-bottom: 3rem;
  &__input {
    width: 100%;
    height: 5rem;
    font-size: 25px;
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    outline: 0;
    border-width: 0;
    border-bottom: 2px solid blue;
    background-color: rgba(#fff, 0.7);
    color: $color-black;
    text-align: center;
    box-shadow: inset 0 0 1rem black;
    &::placeholder {
      color: rgba(#444, 0.9);
    }
  }
}
</style>