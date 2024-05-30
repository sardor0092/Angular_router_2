import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {
  product_id!:string;

  constructor(private actRoute:ActivatedRoute){

    this.product_id  = this.actRoute.snapshot.params['id'];
  }

}
