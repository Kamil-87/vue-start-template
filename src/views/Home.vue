<template>
  <div class="home">
    <UserCard />
    <Counter />
    <Search />
  </div>
</template>

<script>
import Header from "@/components/Header";
import UserCard from "@/components/UserCard";
import Counter from "@/components/Counter";
import Search from "@/components/Search";

export default {
  name: 'Home',
  components: {
    Search,
    Counter,
    UserCard,
    Header,
  }
}
</script>

<style lang="scss">

</style>
