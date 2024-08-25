import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder, private router: Router, private studService: StudentServiceService){}

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
