<template>
  <div class="home">
    <h3>Hello world</h3>
  </div>
</template>
<script>
export default {
  name: "Home",
  setup() {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then(res => res.json())
      .catch(err => console.error(err))
  },
};
</script>