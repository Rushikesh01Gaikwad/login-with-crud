import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentServiceService } from '../../services/student-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.scss'
})
export class StudentAddComponent implements OnInit {

  studId!: number;
  isEdit: boolean = false;

  ngOnInit(): void {
    this.studId = this.route.snapshot.params['id'];
    if(this.studId)
    {
      this.isEdit = true
    }
    this.studService.getStudentDataById(this.studId).subscribe((response: any)=>{
      this.studentData.patchValue(response);
    })
  }

  constructor(private fb: FormBuilder, private router: Router, private studService: StudentServiceService, private route: ActivatedRoute){}

  studentData:FormGroup=this.fb.group({
    name:['', Validators.required],
    email:['', Validators.required],
    gender:['', Validators.required],
    mobile:['', Validators.required],
    class:['', Validators.required],
    semister:['', Validators.required],
    rollnumber:['', Validators.required],
    college:['', Validators.required],
    password:['', Validators.required]
  })

  submitData(){
    if(this.isEdit)
    {
      if(this.studentData.valid)
      {
        const students: StudentInterface = {
          name: this.studentData.value.name!,
    email: this.studentData.value.email!,
    gender: this.studentData.value.gender!,
    mobile: this.studentData.value.mobile!,
    class: this.studentData.value.class,
    semister: this.studentData.value.semister!,
    rollnumber: this.studentData.value.rollnumber,
    college: this.studentData.value.college!
        }
        this.studService.updateStudent(this.studId, students).subscribe((response)=>{
          console.log("success");
          this.router.navigate(['']);
        })
      }
    }
    else
    {
      if(this.studentData.valid){
        const student: StudentInterface = this.studentData.value
        this.studService.AddStudent(student).subscribe((responce)=>{
          console.log("Suuccessfully")
          this.router.navigate([''])
        })
      }
      else{
        console.log("Data is not valid")
      }
    }
  }

  updateData(){

  }



}
