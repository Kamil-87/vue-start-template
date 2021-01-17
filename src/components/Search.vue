<template>
<div class="d-flex f-aie search">
  <label for="id-search">
    <input
        type="text"
        id="id-search"
        v-model="searchText"
    >
  </label>
  <button
      type="button"
      @click="$emit('search', searchText)"
  >
    Найти
  </button>
</div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  input {
    height: 25px;
    margin-left: 40px;
    border-bottom: 1px solid red;
    padding: 5px;
    margin-right: 5px;
  }

  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-top: 20px;
  }
}

</style>
