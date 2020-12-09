<template>
  <footer class="footer">
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
  height: 6rem;
  background: #454545;
  color: #ffffff;
  font-size: 1.4rem;
  width: 100%;
}
.footer {
  flex: 0 0 60px;
}
</style>
<template>
  <footer class="footer">
    <div class="container-fluid">
      &copy; создано в 2020г.
    </div>
  </footer>
</template>

<style>
.footer {
  height: 60px;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  line-height: 60px;
}
</style>
