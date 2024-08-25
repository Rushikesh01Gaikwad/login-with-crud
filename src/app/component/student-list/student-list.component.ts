import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements AfterViewInit {

  studData: StudentInterface[]=[];
  selectedStudent: any = null;

  displayedColumns: string[] = ['name', 'email', 'gender', 'mobile', 'class', 'semister', 'rollnumber', 'college', 'action'];
  dataSource = new MatTableDataSource<StudentInterface>();

  constructor(private studService: StudentServiceService, private _liveAnnouncer :LiveAnnouncer, private router: Router) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
  }

  FilterChange(event:Event)
  {
    const fillValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = fillValue
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  setSelectedItem(Id: number)
  {
    this.selectedStudent = Id;
  }

  deleteItem()
  {
    this.studService.deleteStudent(this.selectedStudent).subscribe((res)=>{
      console.log("Deleted")
      this.router.navigate([''])
    })
  }

  getData()
  {
    this.studService.getStdudent().subscribe((data)=>{

      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    })
  }  

  edit(id:number){
    console.log(id)
    this.router.navigate(['home/addStudent',id])
  }





}
