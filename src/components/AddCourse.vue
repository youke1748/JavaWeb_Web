<template>
  <el-form :inline="true" :model="schoolCourse" class="demo-form-inline">
    <el-form-item label="封面">
      <upload-image @setCover="setCover"></upload-image>
    </el-form-item>
    <el-form-item label="课程名称">
      <el-input v-model="schoolCourse.name" placeholder="课程名称"></el-input>
    </el-form-item>
    <el-form-item label="学时数">
      <el-input v-model="schoolCourse.hours" placeholder="学时数"></el-input>
    </el-form-item>
    <el-form-item label="开课学院">
      <el-select v-model="schoolCourse.schoolname" placeholder="开课学院">
        <el-option v-for="(item,index) in schoolList" :key="index" :label=item :value=item></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {selectAllSchool,addCourse} from "@/api/api";
import UploadImage from "@/components/UploadImage";
import {Message} from "element-ui";
export default {
  name: "AddCouse",
  components: {UploadImage},
  mounted() {
    this.init();
  },
  data() {
    return {
      schoolCourse: {
        name: '',
        hours: '',
        schoolname:'',
        cover:'',
      },
      schoolList:[],
    }
  },
  methods: {
    init(){
        selectAllSchool("/school/getAllName").then(res =>{
            console.log(res)
            this.schoolList = res.data
        })
    },
    setCover(path){
       this.schoolCourse.cover = path
    },
    clear(){
      this.schoolCourse.cover = ''
      this.schoolCourse.hours = ''
      this.schoolCourse.name = ''
      this.schoolCourse.schoolname = ''
    },
    onSubmit() {
      addCourse("/course/addCourse",this.schoolCourse).then(res =>{
        if(res.code === 200){
          this.clear();
          console.log(res)
          this.$emit("add")
        }else{
          Message.error({message:res.msg});
        }
      })
    }
  }
}
</script>

<style scoped>

</style>