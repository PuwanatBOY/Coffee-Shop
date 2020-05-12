import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { } 
  
  id:string; 
  name:string;
  
  ngOnInit() { 
    this.http.get<any>('http://localhost:3000/api/resource').subscribe(data => { 
    this.id = data.id; this.name = data.name; 
    }) 
  }

  getUrl() {
    return "url('https://www.pxl.be/Assets/website/pxl_algemeen/afbeeldingen/pxl_beeld_geselecteerd.jpg')";
  }
}
