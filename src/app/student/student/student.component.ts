
import { Component, Input, OnInit } from '@angular/core';

import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 count:any = 7;
 Src:string =`assets/images/${this.count}.jpg`;

student:Student[]=[
 new Student(1,"nermeen", "assets/images/2.jpg ",20),
 new Student(2,"nero", "assets/images/4.jpg",30),
 new Student(3,"nermo","assets/images/5.jpg",15),
 new Student(4,"nour","assets/images/6.jpg",25),

];

newstudent:Student = new Student (0 , "name" ,this.Src,0);
AddStudent(){
  this.student.push(new Student(this.newstudent.id , this.newstudent.name, this.newstudent.img,this.newstudent.age))
}

stdData:Student = new Student (0, "name" , "img",0);
Details(id:number){
this.student.forEach(item=>{
  if(item.id==id){
    
    this.detailsflag=true;
    this.stdData.id= item.id;
    this.stdData.name=item.name;
    this.stdData.img=item.img;
    this.stdData.age=item.age;
   
  }
});
}

DeleteStd(id:number){
  if (confirm("are you sure want to delete this student data?"))
  {
    console.log(id);
    let i =-1;
    this.student.forEach(item =>{
      i++;
      if(item.id==id){
        this.student.splice(i,1);
      }
    });
  }
}
stdedit:Student = new Student (0 , "" ,this.Src,0);
x:any;

EditStd(id:number){
  

   
  this.student.forEach(item =>{
   
    if(item.id==id){
      new Student(item.id =this.stdedit.id , item.name=this.stdedit.name, item.img= this.stdedit.img ,item.age= this.stdedit.age)

    }

   
  });

 }



//flags

detailsflag=false;

@Input() newflag = false;
  btnaddtitle = "Show Add";
showAdd() {
 this.newflag = !this.newflag;
 if (this.newflag == true)
   this.btnaddtitle = "hide add std";
 else
   this.btnaddtitle = "show add std";

}
 
savebtnflag=false;
@Input() editflag = false;
  //editbtn = "show edit";
  editbtn = "edit";
showedit() {
 this.editflag = !this.editflag;
 if (this.editflag == true){
  this.savebtnflag = !this.savebtnflag;

 }
 if(this.editflag == false){
  this.savebtnflag = false;
 }

//  if (this.newflag == true){
 
//    this.EditStd

//  }
 
}

  constructor() { }

  ngOnInit(): void {
  }

}

