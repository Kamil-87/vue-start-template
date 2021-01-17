<template>
  <div class="container-fluid">
    <div class="d-flex mlminus15 mrminus15">
      <Sidebar class="sidebar"></Sidebar>
      <div class="main">
        <UserCard />
        <Counter />
        <Search />

        <div>
          <InputRadio
            v-for="(item, i) in radios"
            :key="i"
            :label="item.title"
            name="radio"
            :uniq="'radio_' + item.id"
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
      {id: 2, title: 'Текст radio кнопки №2' },
      {id: 3, title: 'Текст radio кнопки №3' },
      {id: 4, title: 'Текст radio кнопки №4' },
    ]
  })
}
</script>

<style lang="scss">
.sidebar {
  order: 0;
  max-width: 25%;
}

.main {
  order: 1;
  flex: 0 0 75%;
}

</style>
