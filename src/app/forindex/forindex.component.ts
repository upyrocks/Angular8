import { Component} from '@angular/core';

@Component({
  selector: 'app-forindex',
  templateUrl: './forindex.component.html',
  styleUrls: ['./forindex.component.css']
})

export class ForindexComponent {
  public Name = '';
  public Price = 0;

  public products = [
    {ProductID : 1 , Name : 'Samsung TV' , Price : 45000.55},
    {ProductID : 2 , Name : 'Shoes' , Price : 5300.44}
  ];

  public AddProduct() {
    let id = this.products.length + 1;
    if ( id > 4 ) {
      id = id - 1 ;
      this.products.splice(id - 1 , 1, {ProductID : id , Name : this.Name , Price : this.Price});
    } else {
      this.products.push({ProductID : id , Name : this.Name , Price : this.Price});
    }
    alert('Record Inserted');
    this.Name = '';
    this.Price = 0;
  }

  public DeleteProduct(index) {
  const Confirm = confirm('Are you sure , you want to delete product');
  if (Confirm) {
    this.products.splice(index, 1);
  }
  }
}
