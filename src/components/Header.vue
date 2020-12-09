<template>
  <header class="header d-flex">
    <router-link to="/" class="header-brand"><img src="../assets/images/logo.png" alt="ST"></router-link>
    <Navbar />
    <div class="header-date-wrapper d-flex f-aic">
      <p class="header-date">
        {{ date | date('datetime') }}
      </p>
    </div>
  </header>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {Navbar},
  data() {
    return {
      date: new Date(),
      interval: null,
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
}

</script>

<style lang="scss">
.header {
  flex: 0 0 6rem;
  padding: 1rem;
  background-color: #7952b3;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .2);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 4rem;
  color: #ffffff;

  @media (max-width: 760px) {
    flex-direction: column;
  }
  &-brand {
    margin-right: 1rem;

    & > img {
      width: 40px;
    }
    @media (max-width: 760px) {
      height: 2.5rem;
      margin-top: 0.5rem;
      overflow: hidden;
    }
  }

  &-date {
    text-align: left;

    &-wrapper {
      min-width: 190px;
      margin-left: auto;
      color: #ffffff;
      @media (max-width: 760px) {
        margin-left: 0;
        height: 2rem;
        margin-top: 0.5rem;
      }
    }
  }
}



</style>
