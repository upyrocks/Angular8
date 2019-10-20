import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  public data = [];
  public GetProductData() {
    return this.data = [
      {Name: 'Samsung TV' , Price: 45000.55 , Category: 'Electronics'},
      {Name: 'Nokia Mobile' , Price: 12000.55 , Category: 'Electronics'},
      {Name: 'Lee Cooper Boot' , Price: 5000.55 , Category: 'Shoes'},
      {Name: 'Nike Casuals' , Price: 4000.55 , Category: 'Shoes'},
      {Name: 'Adidas Shoes' , Price: 3000.55 , Category: 'Shoes'},
      {Name: 'Hp Laptop' , Price: 25000.55 , Category: 'Electronics'}
    ];
  }
}
