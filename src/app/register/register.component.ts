import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public categories = [
    'Electronics',
    'Shoes',
    'Mobile'
  ];
public data = [
  {category : 'Electronics', products : ['Samsung Tv' , 'Mobile' ] },
  {category : 'Shoes' , products : [ 'Nike casuals' , 'Lee Cooper'] }
];
}
