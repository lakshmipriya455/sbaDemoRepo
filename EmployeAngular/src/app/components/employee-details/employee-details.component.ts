import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  // ladyLogo: string;
  // gentLogo: string;
  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) {
    // this.ladyLogo = "/assets/images/lady.png";
    // this.gentLogo = "/assets/images/gent.png";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let eId = params['id'];
        if (eId) {
          this.employeeService.getEmployeeById(eId).subscribe(
            (data) => this.employee = data
          );
        }
      }
    );
  }
}
