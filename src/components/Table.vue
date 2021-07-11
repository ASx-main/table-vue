/* eslint-disable global-require */
<template>
  <div>
     <table border="1">
        <caption>Заработная плата сотрудников</caption>
        <tr>
          <th>Имя сотрудника<br>
          <button @click="sort('name')">Sort Name
            <img :src="require(`@/img/${img.name}`)" :alt="altText">
          </button>
          </th>
          <th>Сумма заработной платы в рублях<br>
          <button @click="sort('sum')">Sort Sum
             <img :src="require(`@/img/${img.sum}`)" :alt="altText">
          </button>
          </th>
        </tr>
        <RowsTable
          :row="row"
          v-for="row of sortArray"
          :key="row.id"
        />
      </table>
    </div>
</template>

<script>
import RowsTable from '@/components/RowsTable.vue';

export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortArray: JSON.parse(JSON.stringify(this.rows)),
      directionName: 'asc',
      img: {
        name: 'up-down.png',
        sum: 'up-down.png',
      },
      altText: 'arrow',
    };
  },

  methods: {
    sortAsc(key) {
      this.sortArray.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }

        if (a[key] > b[key]) {
          return 1;
        }

        return 0;
      });

      this.directionName = 'desc';
      this.img[key] = 'down.png';
    },
    sortDesc(key) {
      this.sortArray.sort((a, b) => {
        if (a[key] > b[key]) {
          return -1;
        }

        if (a[key] < b[key]) {
          return 1;
        }

        return 0;
      });

      this.directionName = 'origin';
      this.img[key] = 'up.png';
    },
    origin(key) {
      this.sortArray = JSON.parse(JSON.stringify(this.rows));

      this.directionName = 'asc';
      this.img[key] = 'up-down.png';
    },
    sort(key) {
      if (this.directionName === 'asc') {
        this.sortAsc(key);
      } else if (this.directionName === 'desc') {
        this.sortDesc(key);
      } else if (this.directionName === 'origin') {
        this.origin(key);
      }
    },
  },
  components: {
    RowsTable,
  },
};

</script>
