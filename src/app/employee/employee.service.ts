import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = []
  constructor() {
    this.employees = EMPLOYEES;
   }
  getEmployess() {
    return this.employees;
  }
  deleteEmployee(id: string) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
  addEmployee(employee: Employee): void {
    const id = Math.random() + "";
    this.employees = [...this.employees, {...employee, id}];//axios.post();
  }
}
