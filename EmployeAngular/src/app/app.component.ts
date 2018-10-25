import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  logoUrl: String;
  field: string = "dateOfJoining";
  srchValue: string = "";

  constructor(
    private router: Router
  ) {
    this.title = "Employee Database";
    this.logoUrl = "/assets/image/emplogo.png";
  }

  doSearch() {
    this.router.navigate(["/listEmployees"], { queryParams: { field: this.field, srchValue: this.srchValue } });
  }

  doChangeField(field, ele) {
    this.field = field;
    this.srchValue = "";
    switch (field) {
      case 'doj': ele.placeholder = "Date of Joining"; ele.type = "date"; break;
      case 'empName': ele.placeholder = "Name"; ele.type = "text"; break;
    }
  }
}