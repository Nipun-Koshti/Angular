import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-addition',
  imports: [CommonModule,FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;

  constructor(private apiService: BackendService) {}

  calculateSum() {
    this.apiService.addNumbers(this.num1, this.num2).subscribe((response:any) => {

      this.result = response.result; 
      console.log(this.result);
    });
  }
}
