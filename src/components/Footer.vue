<template>
  <footer class="footer d-flex f-aic f-jcc">
    <p>Все права защищены <span>{{ date | date('year') }}</span></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    }
  }
}
</script>


<style lang="scss">
.footer {
  flex: 0 0 6rem;
  background: #2c3e50;
  color: #ffffff;
  font-size: 1.4rem;
  width: 100%;
}
</style>

