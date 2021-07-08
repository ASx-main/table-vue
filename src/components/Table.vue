<template>
  <div>
     <table border="1">
        <caption>Заработная плата сотрудников</caption>
        <tr>
          <th>Имя сотрудника<br>
          <button @click="sortName">Sort Name</button>
          </th>
          <th>Сумма заработной платы в рублях<br>
          <button @click="sortSum">Sort Sum</button>
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
    };
  },

  methods: {
    sortNameAsc() {
      this.sortArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      this.directionName = 'desc';
    },
    sortNameDesc() {
      this.sortArray.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }

        if (a.name < b.name) {
          return 1;
        }

        return 0;
      });

      this.directionName = 'origin';
    },
    origin() {
      this.sortArray = JSON.parse(JSON.stringify(this.rows));

      this.directionName = 'asc';
    },
    sortName() {
      if (this.directionName === 'asc') {
        this.sortNameAsc();
      } else if (this.directionName === 'desc') {
        this.sortNameDesc();
      } else if (this.directionName === 'origin') {
        this.origin();
      }
    },
    sortSumAcs() {
      this.sortArray.sort((a, b) => a.sum - b.sum);
      this.directionName = 'desc';
    },
    sortSumDesc() {
      this.sortArray.sort((a, b) => b.sum - a.sum);
      this.directionName = 'origin';
    },

    sortSum() {
      if (this.directionName === 'asc') {
        this.sortSumAcs();
      } else if (this.directionName === 'desc') {
        this.sortSumDesc();
      } else if (this.directionName === 'origin') {
        this.origin();
      }
    },

  },
  components: {
    RowsTable,
  },
};

</script>
