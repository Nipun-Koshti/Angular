import { Component } from '@angular/core';
import { DownloadService } from '../download.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Item {
  name: string;
  price: string;
}


@Component({
  selector: 'app-invoice',
  imports: [CommonModule,FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  customerName: string = '';
  items: Item[] = [];

  constructor(private pdfService: DownloadService) {}

  addItem() {
    this.items.push({ name: '', price: '' });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  generatePDF() {
    const requestData = {
      customerName: this.customerName,
      date: new Date().toISOString().split('T')[0],
      items: this.items
    };

    this.pdfService.sendInvoiceData(requestData).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, error => {
      console.error('Error generating PDF:', error);
    });
  }
}
