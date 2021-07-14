<template>
  <div id="app">
    <Table
      :users="users"
      @sort="sort($event)"
      @search='searching($event)'
    />
  </div>
</template>

<script>
import users from '@/user.json';
import Table from './components/Table.vue';

export default {
  data() {
    return {
      search: '',
      key: 'username',
      usersData: users,
    };
  },
  methods: {
    searching(val) {
      this.search = val;
    },
    sort(key) {
      this.key = key;
    },
  },
  computed: {
    users() {
      let users = JSON.parse(JSON.stringify(this.usersData));

      if (this.search) {
        users = users.filter((item) => item.username.includes(this.search));
      }

      return users;
    },
  },
  components: {
    Table,
  },
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

td {
  text-align: center;
  padding: 5px;
}
</style>
