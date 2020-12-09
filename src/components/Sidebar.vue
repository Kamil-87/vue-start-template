<template>
  <aside class="container-fluid">
    <form role="search" class="bd-search d-flex align-items-center">
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
  background: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
  z-index: 1000;
}

</style>
<template>
  <aside class="sidebar">
    <ul>
      <li></li>
    </ul>
  </aside>
</template>
