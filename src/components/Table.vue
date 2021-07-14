/* eslint-disable global-require */
<template>
  <div>
    <input type="text" @input="search">
     <table border="1">
       <thead>
         <tr>
            <th
              v-for="title of tableTitles"
              :key="title"
              @click="sort(title)"
            >
              {{ title }}
            </th>
         </tr>
       </thead>
       <tbody>
         <tr
          v-for="(user, index) of users"
          :key="index">
           <td>
              {{user.username}}
           </td>
           <td>
              {{user.phone}}
           </td>
          <td>
              {{user.email}}
          </td>
          <td >
            <tr>
              {{ user.person.name }}
            </tr>
            <tr>
              {{ user.person.surname }}
            </tr>
            <tr>
              {{ user.person.birthday }}
            </tr>
          </td>
         </tr>
       </tbody>
      </table>
    </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    sort(key) {
      this.$emit('sort', key);
    },
    search(e) {
      this.$emit('search', e.target.value);
    },
  },
  computed: {
    tableTitles() {
      const titleArray = Object.keys(this.users[0]);

      return titleArray.filter((el) => el !== 'do_not_show_it_in_UI');
    },
  },
};

</script>
