import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { DeptCountPipe } from './pipes/dept-count.pipe';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdjustNameLenPipe } from './pipes/adjust-name-len.pipe';
import { JoinedTodayPipe } from './pipes/joined-today.pipe';

const paths: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'listEmployees', component: EmployeeListComponent },
  { path: 'addEmployee', component: EmployeeFormComponent },
  { path: 'editEmployee/:id', component: EmployeeFormComponent },
  { path: 'viewEmployee/:id', component: EmployeeDetailsComponent },
  { path: 'delEmployee/:id', component: DeleteEmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeDetailsComponent,
    DeptCountPipe,
    DeleteEmployeeComponent,
    AdjustNameLenPipe,
    JoinedTodayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
