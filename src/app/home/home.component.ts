import { CardComponent } from '../card/card.component';
import { IProduct } from '../iproduct';
import { ProductsService } from './../products.service';
import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products!:IProduct[];
  categorySelected:string | undefined = "all";
  categories:string[] = ["all","electronics","jewelery","men's clothing","women's clothing"]
  constructor(private _ProductsService:ProductsService){

  }
  ngOnInit(): void {
      this._ProductsService.getProducts().subscribe({
        next:(res)=>{
          this.products = res;
        },
        error:(err)=>{
          window.alert("no internet connection or something worng with API")
        }
      })
  }
  showCategory(element:HTMLParagraphElement):void{
    this.categorySelected = element.dataset['category'];
  }
}
