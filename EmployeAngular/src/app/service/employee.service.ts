import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { map } from 'rxjs/operators';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:3131/Employees";
  }


  getAllEmployees(): Observable<Employee[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }


  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }


  searchEmployees(field: string, value: string): Observable<Employee[]> {
    return this.http.get(this.getSearchUrl(field, value)).pipe(
      map(data => data.json())
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  deleteEmployeeById(id: number): Observable<Response> {
    return this.http.delete(this.getBaseUrlById(id));
  }

  addEmployee(Employee: Employee): Observable<Employee> {
    return this.http.post(this.baseUrl, JSON.stringify(Employee), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  updateEmployee(Employee: Employee): Observable<Employee> {
    return this.http.put(this.baseUrl, JSON.stringify(Employee), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

}
