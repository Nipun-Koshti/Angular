import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private baseUrl = 'http://localhost:5097/api/pdf'; // Adjust port if needed
  
  constructor(private http: HttpClient) {}
  

  downloadInvoice() {
    return this.http.get(`${this.baseUrl}/invoice`, {
      responseType: 'blob' // Important: API returns a binary PDF file
    });
  }

  sendInvoiceData(data: any) {
    return this.http.post(`${this.baseUrl}/generate-invoice`, data, {
      responseType: 'blob' // Expecting a binary PDF response
    });
  }
}
