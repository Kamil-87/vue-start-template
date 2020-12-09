<template>
  <div class="navbar d-flex f-aic">
    <ul class="navbar-nav d-flex f-aic">
      <li class="navbar-list">
        <router-link to="/" class="navbar-link">Home</router-link>
      </li>
      <li class="navbar-list">
        <router-link to="/about" class="navbar-link">About</router-link>
      </li>
    </ul>
  </div>
</template>


<style lang="scss">

.navbar {
  &-link {
    display: block;
    padding: .5rem 1rem;
    color: #ffffff;
  }
}

</style>
