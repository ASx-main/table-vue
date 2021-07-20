<template>
  <div id="app">
    <Table
      :users="getUsers"
      @searching="searching"
      @sorting="sorting"
    />
  </div>
</template>

<script>
import users from './services/users';
import Table from './components/Table.vue';

export default {
  data() {
    return {
      usersData: users,
      search: '',
      direction: '',
      key: '',
    };
  },
  methods: {
    searching(val, key) {
      this.search = val;
      this.key = key;
    },
    sorting(key) {
      this.key = key;
      if (this.direction === '') {
        this.direction = 'asc';
      } else if (this.direction === 'asc') {
        this.direction = 'desc';
      } else {
        this.direction = '';
      }
    },
  },
  computed: {
    getUsers() {
      let newUsers = JSON.parse(JSON.stringify(this.usersData));

      if (this.search !== '') {
        // eslint-disable-next-line max-len
        newUsers = newUsers.filter((user) => user[this.key].toLowerCase().includes(this.search.toLowerCase()));
      }

      newUsers.sort((a, b) => {
        if (this.direction === 'asc') {
          if (a[this.key] < b[this.key]) {
            return -1;
          }

          if (a[this.key] > b[this.key]) {
            return 1;
          }
        } else if (this.direction === 'desc') {
          if (a[this.key] > b[this.key]) {
            return -1;
          }

          if (a[this.key] < b[this.key]) {
            return 1;
          }
        }
        return 0;
      });

      return newUsers;
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
