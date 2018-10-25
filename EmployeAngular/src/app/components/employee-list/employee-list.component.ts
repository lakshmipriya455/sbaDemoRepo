import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  netLogo: string;

  dbLogo: string;

  testLogo: string;

  hrLogo: string;
  constructor(private empserv: EmployeeService,
    private activatedRoute: ActivatedRoute) {
    this.dbLogo = "/assets/image/db.jpg";

    this.testLogo = "/assets/image/test.png";

    this.hrLogo = "/assets/image/hr.png";

    this.netLogo = "/assets/image/net.png";
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let field = params['field'];
        let srchValue = params['srchValue'];

        if (field && srchValue) {
          this.empserv.searchEmployees(field, srchValue).subscribe(
            (data) => this.employees = data,
            (err) => this.employees = undefined
          );
        } else {
          this.empserv.getAllEmployees().subscribe(
            (data) => this.employees = data,
            (err) => this.employees = undefined
          );
        }
      }, (err) => this.employees = undefined
    );

  }

}
