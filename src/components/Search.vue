<template>
<div class="container-fluid search mt20 border1 p10">
  <input type="text" @input="searchText=$event.target.value" class="border1">
  <p>Всего имен: {{users.length}}</p>
  <p>Совпадений: {{getFilteredNames.length}}</p>
  <ul class="mt20">
    <li
      class="user-list fgrey"
      v-for="(user, i) in getFilteredNames"
      :key="i"
    >
      {{user}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data: () => ({
    searchText: '',
    users: ['Камиль', 'Ринат', 'Виталий', 'Динис', 'Данил', 'Дим'],
  }),

  computed: {
    getFilteredNames() {
      return this.users.filter(user => user.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
</script>
