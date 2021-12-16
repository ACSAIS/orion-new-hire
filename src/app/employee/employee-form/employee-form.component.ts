import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

const INITIAL_STATE: Employee = {
  firstName: "asdf",
  lastName: "",
  ssn: "",
  id: "",
}
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  newEmployee: Employee = Object.assign({}, INITIAL_STATE);
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  @Output() myEvent = new EventEmitter();
  clearForm(): void {
    this.newEmployee = Object.assign({}, INITIAL_STATE);
  }
  onSubmit(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.myEvent.emit(null);
    this.clearForm();
  }

}
