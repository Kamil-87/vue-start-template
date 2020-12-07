<template>
  <div class="control">
    <p>выберите кол-во продуктов:</p>
    <button
        type="button"
        @click="decreaseCount"
    > - </button>
    <input
        type="number"
        :value="count"
        :min="minCount"
        :max="maxCount"
    >
    <button
        type="button"
        @click="increaseCount"
    > + </button>
  </div>
</template>

<script>
export default {
  data: ()=>({
    count: 1,
    minCount: 0,
    maxCount: 10,
  }),
  methods: {
    decreaseCount() {
      if (this.count > this.minCount) {
        this.count--
      }
    },
    increaseCount() {
      if (this.count < this.maxCount) {
        this.count++
      }
    },
  }
}
</script>
