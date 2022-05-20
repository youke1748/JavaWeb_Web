<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%"
        stripe>
      <el-table-column
          label="封面"
          width="180"
          align="center">
        <template slot-scope="scope">
          <img class="img" :src="getPath(scope.row.cover)" />
        </template>
      </el-table-column>
      <el-table-column
          label="课程"
          width="180"
          align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="hours"
          label="课时"
          width="150"
          align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 5px">{{scope.row.hours}}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="schoolName"
          label="学院"
          width="180"
          align="center">
        <template slot-scope="scope">
          <span>{{scope.row.schoolname}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <update-course :Visible="Visible" :Course="Course" @save="save"></update-course>
  </div>

</template>

<script>
import {deleteCourse} from "@/api/api";
import UpdateCourse from "@/components/UpdateCourse";

export default {
  name: "CouseTable",
  components: {UpdateCourse},
  props:{
    tableData: []
  },
  data() {
    return {
      Visible:false,
      Course:{}
    }
  },
  methods: {
    getPath(path){
      return "http://localhost:9000"+path;
    },
    save(){
      this.Visible = false;
      this.$emit("flash")
    },
    handleEdit(index, row) {
      this.Visible = true;
      this.Course = row;
      console.log(index, row)
    },
    handleDelete(index, row) {

      deleteCourse("/course/deleteCourse?id="+row.id,).then(res =>{
          console.log(res)
          this.$emit("flash")
      })
    },
  }
}
</script>

<style scoped>
.img{
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
</style>