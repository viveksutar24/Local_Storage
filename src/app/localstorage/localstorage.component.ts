import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {

  products2: any = [];

  product: any = "";

  constructor() {

  }
  ngOnInit(): void {

    this.product = { name: "sadjhjasd", price: 21556 };

    this.products2.push(this.product);

    localStorage.setItem("products2", JSON.stringify(this.products2));

    console.log(this.products2);

  }

}


