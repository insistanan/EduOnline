import request from '@/utils/request'
export default {
    //1 讲师列表（条件查询分页）
    //current当前页 limit每页记录数 teacherQuery条件对象
    getTeacherListPage(page,limit,teacherQuery) {
        return request({
            url: `/eduService/edu-teacher/multiPage/${page}/${limit}`,
            method: 'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换json进行传递到接口里面
            data: teacherQuery
          })
    },
    //删除讲师
    deleteTeacherId(id) {
        return request({
            url: `/eduService/edu-teacher/deleteTeacher/${id}`,
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduService/edu-teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `/eduService/edu-teacher/getTeacher/${id}`,
            method: 'get'
          })
    },
    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduService/edu-teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}
