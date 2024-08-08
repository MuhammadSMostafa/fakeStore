import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from "../loading/loading.component";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [LoadingComponent, NotFoundComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product!:IProduct;
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){}
  ngOnInit(): void {
       this._ActivatedRoute.queryParamMap.subscribe({
      next: (res)=>{
        this._ProductsService.getProducts(res.get('id')).subscribe({
           next: (res)=>{
             this.product = res;
           },
            error:(err)=>{
          alert("no internet connection or something worng with API")
        }
         })
      },
    })
  }
}
