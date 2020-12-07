<template>
  <div class="user-card container-fluid">
    <h1 class="fs20 mb20">Научу зарабатывать от 50000</h1>
    <div class="main-information flex jcsa mb20">
      <img src="../assets/images/bat.jpeg" alt="bat" width="500px">
      <div class="info">
        <h2>
          {{ getAuthorFullName }}
        </h2>
        <strong>Бизнес-коуч</strong>
        <ul>
          <li>Учу людей</li>
          <li>Знаю все</li>
          <li>Не обману</li>
        </ul>
      </div>

    </div>
    <p class="tal mb10">Участников: {{ users.length }}</p>
    <ul class="tal mb20">
      <li
        v-for="(item, idx) of users"
        :key="idx"
      >
        {{`${idx + 1} ${getFullName(item)}` }}
      </li>
    </ul>

    <div class="pagination flex">
      <button
          type="button"
          @click="currentPage--"
      >
        prev
      </button>
      <button
          v-for="page in pages"
          :key="page"
          type="button"
          @click="currentPage = page"
          class="tik"
      >
        {{page}}
      </button>

      <button
          type="button"

          @click="currentPage++"
      >
        next
      </button>
      <p>Страница {{ currentPage }} из {{ pages }}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Card',
  data: ()=>({
    firstName: 'Иванов',
    secondName: 'Иван',
    lastName: 'Иванович',
    users: [
      {
        firstName: 'Иванов',
        secondName: 'Иван',
        lastName: 'Иванович',
      },
      {
        firstName: 'Иванов',
        secondName: 'Иван',
        lastName: 'Иванович',
      },
      {
        firstName: 'Иванов',
        secondName: 'Иван',
        lastName: 'Иванович',
      },
    ],
    pages: 3,
    currentPage: 1,
  }),

  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`.toUpperCase()
    },
    loadUsers(page) {
      console.log(`Загрузка пользователей страница ${page}`)
    }
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }
}
</script>

<style lang="scss">
button {
  font-size: 16px;
  padding: 15px;
  margin-right: 5px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
