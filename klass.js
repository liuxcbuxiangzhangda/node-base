/**
 * Created by Administrator on 2017/8/22.
 */
var students=require("./students");
var teacher=require("./teacher");
function add(kname,tname,sname) {
     console.log(kname);
     teacher.addTeacher(tname);
     sname.forEach(function (item,index) {
         students.addStudents(item)
     })
}

module.exports.addKlass=add;