import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {


  employee: Employee;
  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let employeeId = params['id'];
        if (employeeId) {
          this.employeeService.getEmployeeById(employeeId).subscribe(
            (data) => this.employee = data
          );
        }
      }
    );
  }

  doDelete(isConfirmed: boolean) {
    if (isConfirmed) {
      this.employeeService.deleteEmployeeById(this.employee.empId).subscribe(
        (resp) => {
          if (resp.ok) {
            this.router.navigateByUrl("/?opt=d&id=" + this.employee.empId);
          }
        }
      );
    } else {
      this.router.navigateByUrl("/");
    }
  }

}
