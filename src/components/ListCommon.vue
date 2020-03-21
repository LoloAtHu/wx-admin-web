<template>
  <div>
    <el-table :data="tableData" stripe stype="width 100%"  v-for="title in titleList">
      <el-table-column
        prop="title.key"
        label="title.label"
        width="title.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListCommon',
  props: {
    tableData: Array,
    titleList: Array
  }
}
</script>
