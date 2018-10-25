import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logoUrl: string;
  title: string;
  employees: Employee[];
  msg: string;
  constructor(private empserv: EmployeeService,
    private activatedRoute: ActivatedRoute) {

    this.title = "Employee Database";
    this.logoUrl = "/assets/image/emplogo.png";

  }

  ngOnInit() {

    this.empserv.getAllEmployees().subscribe(
      (data) => this.employees = data
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let empId = params['id'];
        let operation = params['opt'];
        if (empId && operation) {
          this.msg = "Employee # " + empId + " is successfully " +
            (operation == 'd' ? 'Deleted' : (operation == 'a' ? 'added' : 'updated'));

        } else {
          this.msg = undefined;
        }
      }
    );
  }

}
