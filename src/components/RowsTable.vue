<template>
<tr>
  <td>
    {{row.name}}
  </td>
  <td>
    {{row.sum}}
  </td>
</tr>
</template>

<script>
export default {
  props: {
    row: Object,
  },
};
</script>

<style>

</style>
