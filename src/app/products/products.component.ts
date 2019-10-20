import { Component} from '@angular/core';
import {ProductdataService} from '../productdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productdata: ProductdataService) {

  }
  public data = this.productdata.GetProductData();
  public SelectedValue = 'All';
  public All = this.data.length;
  public ElectronicsCount = this.data.filter(x => x.Category === 'Electronics').length;
  public ShoesCount = this.data.filter(x => x.Category === 'Shoes').length;

  public onChanged(selectedValue) {
    this.SelectedValue = selectedValue;
  }
}
