<template>
  <div id="app">
    <Header />
    <Main class="wrapper-main"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/layouts/Main";
export default {
  components: {Main, Footer, Header}
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.wrapper-main {
  flex: 1 0 auto;
}

</style>
