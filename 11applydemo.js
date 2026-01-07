//apply method
const studentInfo = {
    studentDetails : function(qualification,branch){
        return this.rollNo + " " + this.sname + " " + qualification + " " + branch

    }
}
const student = {
    rollNo : 7,
    sname : "balaji"
}
console.log(studentInfo.studentDetails.apply(student,["Btech","CSE"]));