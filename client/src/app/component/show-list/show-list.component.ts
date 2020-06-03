import { Component, OnInit,PipeTransform } from '@angular/core';
import { AddListService } from 'src/app/service/add-list.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  sts:number = 1;
  alldata: any;
  term: string;
  selectData = new FormGroup({
    nameProduct: new FormControl('')
  });

  constructor(private addListService: AddListService,private router: Router) {}
  

  ngOnInit(): void {
  }
  getUsername(){
    let user = localStorage.getItem("username");
    return user;
  }
  Logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.router.navigate(['/loginem']);
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

deleteProduct(nameProduct: any){
  console.log(nameProduct);
  this.addListService.delete(nameProduct)
    .subscribe(
      response =>{
        alert('delete successful')
        console.log(response);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
}

updateProduct(nameProduct: any){
  console.log(nameProduct);
}

}
