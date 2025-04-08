import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';

@Component({
  selector: 'app-eta',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './eta.component.html',
  styleUrl: './eta.component.css'
})
export class EtaComponent {
  idVisible:Boolean = false;
  isContent:Boolean = false;

  userList:any [] =[];

  // http = inject(HttpClient);
  //dependency injextion here
  constructor(private http: HttpClient){

  }

  getContent(){
    this.idVisible=true;
    this.isContent = true;

    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any)=>{
  
      this.userList=result;
    })
  }


  displayContent(){
    this.idVisible = !this.idVisible;
    console.log('idVisible:', this.idVisible); 
  }

}
