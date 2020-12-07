<template>
  <div id="app">
    <Header />
    <Main class="main"/>
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

.header {
  flex: 0 0 auto;
}

.main {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}

</style>
