<template>
  <header class="navbar">
    <a class="navbar-brand" href="/"><img src="../assets/images/logo.png" alt="ST"></a>
    <div class="navbar-nav-scroll">
      <ul class="navbar-nav">
        <li class="navbar-item">
          <a href="/" class="navbar-link">Home</a>
        </li>
        <li class="navbar-item">
          <a href="#/about!" class="navbar-link">About</a>
        </li>
      </ul>
    </div>
    <p class="navbar-date">
      здесь будет текущая дата и время
    </p>
  </header>
</template>


<style lang="scss">
  .navbar {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #7952b3;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .2);
    position: sticky;
    top: 0;
    z-index: 1000;
    min-height: 4rem;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    &-brand {
      margin-right: 1rem;

      >img {
        width: 40px;
      }
      @media (max-width: 760px) {
        height: 2.5rem;
        margin-top: 0.5rem;
        overflow: hidden;
      }
    }

    &-nav-scroll {

    }

    &-nav {
      display: flex;
      align-items: center;
    }

    &-link {
      display: block;
      padding: .5rem 1rem;
      color: #ffffff;
    }

    &-date {
      margin-left: auto;
      color: #ffffff;
      @media (max-width: 760px) {
        margin-left: 0;
        height: 2rem;
        margin-top: 0.5rem;
      }
    }

  }
</style>
