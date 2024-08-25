import { Injectable } from '@angular/core';
import { StudentInterface } from '../interfaces/student-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  AddStudent(record: StudentInterface){
    return this.http.post('http://localhost:3000/students', record)
  }

  getStdudent(){
    return this.http.get<StudentInterface[]>('http://localhost:3000/students')
  }

  getStudentDataById(id:number){
    return this.http.get<StudentInterface[]>('http://localhost:3000/students/'+id)
  }

  updateStudent(id:number, data:StudentInterface){
    return this.http.put<StudentInterface[]>('http://localhost:3000/students/'+id, data)
  }

  deleteStudent(id:number){
    return this.http.delete<StudentInterface[]>('http://localhost:3000/students/'+id)
  }
}
