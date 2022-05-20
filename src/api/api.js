import {postRequest,deleteRequest,getRequest} from "@/utils/request";

//添加课程信息
export function addCourse(url,data){return postRequest(url,data)}

//删除课程信息
export function deleteCourse(url,data){return deleteRequest(url,data)}

//查询所有课程信息
export function selectCourseAll(url,data){return getRequest(url,data)}

//修改所有课程信息
export function updateCourse(url,data){return postRequest(url,data)}

//查询所有学校名
export function selectAllSchool(url,data){return getRequest(url,data)}