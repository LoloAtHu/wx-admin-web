<template>
  <div>
    <div>
      <Menu></Menu>
    </div>
    <!-- this is setting page -->
    <div class="l-tip">Setting page</div>
    <el-table :data="tableData" stripe stype="width 100%"  >
      <el-table-column v-for="(title, index) in titleList"
        :key="index"
        :prop="title.key"
        :label="title.label"
        :width="title.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  name: 'Setting',
  data () {
    return {
      msg: 'Setting page',
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
  },
  components: {
    Menu
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
