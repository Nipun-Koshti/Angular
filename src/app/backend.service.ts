import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:5097/Home'; // Adjust port if needed

  constructor(private http: HttpClient) {}

  // Function to call the API and get the sum
  addNumbers(num1: number, num2: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/add?num1=${num1}&num2=${num2}`);
  }
}
