<template>
  <div>
    <div class="app-content">
      <!-- this is index page -->
      <div class="l-tip">Index page</div>
      <el-table :data="tableData" stripe stype="width 100%"  >
        <el-table-column v-for="(title, index) in titleList"
          :key="index"
          :prop="title.key"
          :label="title.label"
          :width="title.width">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index page',
      titleList: [
        { key: 'id', label: 'ID', width: '%20' },
        { key: 'question', label: '问题', width: '%40' },
        { key: 'answer', label: '答案', width: '%30' },
        { key: 'status', label: '状态', width: '%10' }
      ],
      tableData: [
        { id: 1, question: 'hello', answer: 'hello' },
        { id: 2, question: 'Are you OK?', answer: 'You guess!' },
        { id: 3, question: 'How are you?', answer: 'Get out!' }
      ]
    }
  }
}
</script>

<style>
.l-tip {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
}
</style>
