import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AddListService } from 'src/app/service/add-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  sts:number = 1;
  alldata: any;
  term: string;

  constructor(private router: Router,private addListService: AddListService) { }

  ngOnInit(): void {
  }

  getAllData(){
    if(this.sts == 1){
    this.addListService.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.alldata = response;
          console.log(this.alldata);
        },
        error => {
          console.log(error);
        });
    }
    this.sts = 0;
    return this.alldata;
  }

  Logout(){
    this.router.navigate(['/home']);
  }
  
}
