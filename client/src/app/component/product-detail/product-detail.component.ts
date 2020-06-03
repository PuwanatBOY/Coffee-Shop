import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddListService } from 'src/app/service/add-list.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  sts:number = 1;
  product: any;
  id: string;

  constructor(private route: ActivatedRoute,private addListService: AddListService) { }

  ngOnInit(): void {
    this.getProductData()  
  }

  getProductData(){
    const productId = this.route.snapshot.paramMap.get('id');
    this.addListService.get(productId)
    .subscribe(
      response => {
        console.log(response);
        this.product = response;
      },
      error => {
        console.log(error);
      });
  }

}
