<template>
  <div class="all">
    <div class="main">
      <div><add-couse @add="init()"></add-couse></div>
      <div class="table">
        <couse-table :tableData="tableData" @flash="init()"></couse-table>
      </div>
    </div>
  </div>
</template>

<script>

import CouseTable from "@/components/CouseTable";
import AddCouse from "@/components/AddCourse";
import {selectCourseAll} from "@/api/api";
export default {
  name: 'App',
  components: {AddCouse, CouseTable},
  mounted() {
    this.init();
  },
  data(){
    return {
      tableData:[]
    }
  },
  methods:{
    init(){
      selectCourseAll("/school/getAllCourse").then(res =>{
        console.log(res)
        this.tableData = res.data;
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.table{
  width: 65vw;
  height: 50vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
