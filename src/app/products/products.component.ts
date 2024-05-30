import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products = [
    {
      id:"ABCD1234",
      name:"Sardor",
      descrtion:"Lorem sardor"
    },

    {
      id:"EFGJ567",
      name:"abror",
      descrtion:"Lorem abror"
    },


    {
      id:"OPQRS91011",
      name:"alibek",
      descrtion:"Lorem alibek"
    },

  ]




  ngOnInit(): void {
  
  }



}
