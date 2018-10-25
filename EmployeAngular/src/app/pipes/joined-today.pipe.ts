import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'joinedToday'
})
export class JoinedTodayPipe implements PipeTransform {

  transform(emps: Employee[]): Employee[] {
    let today = new Date();
    return emps.filter(c => {
      let dob = new Date(c.dateOfJoining);
      return dob.getDate() == today.getDate() &&
        dob.getMonth() == today.getMonth();
    });
  }
}
