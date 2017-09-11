/**
 * Created by Administrator on 2017/8/22.
 */
var klass=require("./klass");
var school=[
    {klassname:"1",teachername:"wang",studentname:["bai","li","hong"]},
    {klassname:"2",teachername:"li",studentname:["jh","fgi","khk"]},
    {klassname:"3",teachername:"kiki",studentname:["ku","fh","hfjg"]}
];
function add() {
    for(var i=0;i<school.length;i++){
        klass.addKlass(school[i].klassname,school[i].teachername,school[i].studentname)
    }
}
add()
