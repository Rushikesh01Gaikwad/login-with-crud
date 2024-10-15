import { Injectable } from '@angular/core';
import { StudentInterface } from '../interfaces/student-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  AddStudent(record: StudentInterface){
    return this.http.post('https://localhost:7138/api/Students', record)
  }

  getStdudent(){
    return this.http.get<StudentInterface[]>('https://localhost:7138/api/Students')
  }

  getStudentDataById(id:number){
    return this.http.get<StudentInterface[]>('https://localhost:7138/api/Students/'+id)
  }

  updateStudent(id:number, data:StudentInterface){
    return this.http.put<StudentInterface[]>(`https://localhost:7138/api/Students/${id}`, data)
  }

  deleteStudent(id:number){
    return this.http.delete<StudentInterface[]>('https://localhost:7138/api/Students/'+id)
  }
}
