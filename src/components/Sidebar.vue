<template>
  <aside>
    <form role="search" class="bd-search d-flex f-aic p10 mb10">
      <label for="search">
        <input type="text" id="search" name="search" placeholder="Search">
      </label>
    </form>

    <ul class="sidenav app-sidenav open">
      <li>
        <a href="#" class="">Forms</a>
      </li>
      <li>
        <a href="#" class="">Cards</a>
      </li>
      <li>
        <a href="#" class="">Container</a>
      </li>
      <li>
        <a href="#" class="">Flex</a>
      </li>
    </ul>
  </aside>
</template>


<style lang="scss">

aside {
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  padding-top: 4rem;
  height: 100vh;
}

</style>
