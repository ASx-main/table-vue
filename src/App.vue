<template>
  <div id="app">
    <Table
    :rows="rows"/>
  </div>
</template>

<script>
import Table from './components/Table.vue';

export default {
  data() {
    return {
      rows: [
        { id: 1, name: 'Иванова Вера', sum: 22500 },
        { id: 3, name: 'Петрова Лидия', sum: 18900 },
        { id: 5, name: 'Петров Иван', sum: 24600 },
        { id: 7, name: 'Молчанов Дмитрий', sum: 31750 },
        { id: 9, name: 'Сергеева Мария', sum: 27600 },
        { id: 11, name: 'Полстянова Евгения', sum: 29750 },
        { id: 13, name: 'Горький Павел', sum: 14800 },
        { id: 15, name: 'Лоскутова Оксана', sum: 19400 },
        { id: 17, name: 'Переверзев Максим', sum: 32690 },
        { id: 19, name: 'Акиньшин Вадим', sum: 38700 },
      ],
    };
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
