import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;
  isEditing: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.isEditing = false;

    this.activatedRoute.params.subscribe(
      (params) => {
        let eId = params['id'];
        if (eId) {
          this.employeeService.getEmployeeById(eId).subscribe(
            (data) => {
              this.employee = data;
              this.isEditing = true;
            }
          );
        }
      }
    );
  }

  save() {
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        (data) => {
          this.router.navigateByUrl("/?opt=u&id=" + this.employee.empId);
        },
        (error) => { alert("Your Basic already exist"); }
      );
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(
        (data) => {
          this.router.navigateByUrl("/?opt=a&id=" + data.empId);
        },
        (error) => { alert("Your Basic already exist"); }
      );
    }
  }
}
