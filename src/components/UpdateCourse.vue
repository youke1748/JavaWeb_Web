<template>
  <el-dialog title="编辑课程" :visible.sync="Visible">
    <el-form :model="Course" class="demo-form-inline">
      <el-form-item label="封面">
        <upload-image @setCover="setCover"></upload-image>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model="Course.name"></el-input>
      </el-form-item>
      <el-form-item label="学时数">
        <el-input v-model="Course.hours"></el-input>
      </el-form-item>
      <el-form-item label="开课学院">
        <el-select v-model="Course.schoolname">
          <el-option v-for="(item,index) in schoolList" :key="index" :label=item :value=item></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="Visible = false">取 消</el-button>
      <el-button type="primary" @click="update()">保 存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {selectAllSchool, updateCourse} from "@/api/api";
import UploadImage from "@/components/UploadImage";
import {Message} from "element-ui";

export default {
  name: "UpdataCourse",
  components: {UploadImage},
  mounted() {
    this.init();
  },
  props:{
    Visible: Boolean,
    Course:{}
  },
  data(){
    return{
      schoolList:[],
    }
  },
  methods:{
    init(){
      selectAllSchool("/school/getAllName").then(res =>{
        console.log(res)
        this.schoolList = res.data
      })
    },
    update(){
      updateCourse("/course/updateCourse",this.Course).then(res =>{
        if(res.code === 200){
          console.log(this.Course)
          console.log(res);
          this.$emit("save")
        }else{
          Message.error({message:res.msg});
        }
      })
    },
    setCover(path){
      this.Course.cover = path
    },
  }
}
</script>

<style scoped>

</style>