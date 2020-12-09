<template>
  <div class="container-fluid">
    <div class="d-flex">
      <Sidebar class="sidebar"></Sidebar>
      <div class="main">
        <UserCard />
        <Counter />
        <Search />

        <div>
          <InputRadio
            v-for="(item, i) in radios"
            :key="i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import Counter from "@/components/Counter";
import Search from "@/components/Search";
import Sidebar from "../components/Sidebar";
import InputRadio from "../components/InputRadio";

export default {
  name: 'Home',
  components: {
    InputRadio,
    Sidebar,
    Search,
    Counter,
    UserCard,
  },

  data: () => ({
    radios: [
      {id: 1, title: 'Текст radio кнопки №1' },
      {id: 2, title: 'Текст radio кнопки №2' }
    ]
  })
}
</script>

<style lang="scss">
.sidebar {
  order: 0;
}

.main {
  order: 1;
  flex: 0 0 75%;
}

</style>
