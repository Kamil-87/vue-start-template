<template>
  <aside>
    <form role="search" class="form-search d-flex f-aic">
      <label for="search" class="form-control fs16 lhr">
        <input type="text" id="search" name="search" placeholder="Search">
      </label>
    </form>

    <nav class="sidenav pl15 pr15 pt15">
      <div>
        <a href="#" class="sidenav-list mb10">Learns</a>
      </div>
      <div>
        <a href="#" class="sidenav-list">Containers</a>
      </div>
      <div>
        <a href="#" class="sidenav-list">Forms</a>
      </div>
      <div>
        <a href="#" class="sidenav-list">Text</a>
      </div>
      <div>
        <a href="#" class="sidenav-list">Space</a>
      </div>
      <div>
        <a href="#" class="sidenav-list">Indents</a>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss">

aside {
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
}

.form-search {
  padding: 16px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
}

.form-control {
  display: block;
  width: 100%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 10px 16px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.sidenav-list {
  display: block;
  padding: .25rem 1.5rem;
  font-weight: 600;
  color: rgba(0,0,0,.65);
}
</style>
