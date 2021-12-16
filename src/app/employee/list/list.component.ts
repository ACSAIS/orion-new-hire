import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[] = []

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employees = this.employeeService.getEmployess();
  }
  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id);
    this.getEmployees();
  }

}
