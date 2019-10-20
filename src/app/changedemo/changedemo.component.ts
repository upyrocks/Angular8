import { Component } from '@angular/core';

@Component({
  selector: 'app-changedemo',
  templateUrl: './changedemo.component.html',
  styleUrls: ['./changedemo.component.css']
})
export class ChangedemoComponent {

  public lstcategories;
  public lstproducts;
  public productName;
  public productPrice;
  public imgPreview;

  public categories = ['Electronics' , 'Shoes'];
  public electronics = ['Samsung TV' , 'Mobile'];
  public shoes = ['Nike Casuals' , 'Lee Cooper Boot'];

  public data = [
    {Name: 'Samsung TV' , Price: 40000.55 , Photo: 'assets/tv.jpg' },
    {Name: 'Mobile' , Price: 12000.55 , Photo: 'assets/mobile.jpg' },
    {Name: 'Nike Casuals' , Price: 5000.55 , Photo: 'assets/shoes.jpg' },
    {Name: 'Lee Cooper Boot' , Price: 6000.55 , Photo: 'assets/tv.jpg' }
  ];

  public products;
  public counyItems = [];

  public ShowDetails(index: number) {
    this.productName = this.data[index].Name;
    this.productPrice = this.data[index].Price;
    this.imgPreview = this.data[index].Photo;
  }

  public ProductChanged() {
    switch (this.lstproducts) {
         case 'Samsung TV':
           this.ShowDetails(0);
           break;
         case 'Mobile':
           this.ShowDetails(1);
           break;
         case 'Nike Casuals':
           this.ShowDetails(2);
           break;
         case 'Lee Cooper Boot':
           this.ShowDetails(3);
           break;
    }
  }
}
