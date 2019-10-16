import { Component} from '@angular/core';

@Component({
  selector: 'app-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.css']
})
export class IterationComponent {
  // data to display table
    public data = [
      {ID: 1, Name : 'Samsung TV', Price : 34000.55},
      {ID: 2, Name : 'Mobile', Price : 12000.55},
      {ID: 3, Name : 'Nike Show ', Price : 5000.55}
    ];
   // data to display cards;
    public products = [
      {Name : 'Samsung TV', Price : 34000.55 , Image: 'assets/tv.jpg'},
      {Name : 'Mobile', Price : 12000.55 , Image: 'assets/mobile.jpeg'},
      {Name : 'Nike Show ', Price : 5000.55 , Image: 'assets/shoes.jpeg'}
    ];

    // data to display likes and dislikes
    public items = [
      {Name : 'Samsung TV', Image: 'assets/tv.jpg', Likes: 0, Dislikes: 0 },
      {Name : 'Mobile', Image: 'assets/mobile.jpeg', Likes: 0, Dislikes: 0},
      {Name : 'Nike Show ', Image: 'assets/shoes.jpeg', Likes: 0, Dislikes: 0}
    ];

    public Likes(item) {
      item.Likes++ ;
    }

    public Dislikes(item) {
      item.Dislikes++ ;
    }

    public AddNewProducts() {
      this.data = [
      {ID: 1, Name : 'Samsung TV', Price : 34000.55},
      {ID: 2, Name : 'Mobile', Price : 12000.55},
      {ID: 3, Name : 'Nike Show ', Price : 5000.55},
      {ID: 4, Name : 'Laptop ', Price : 25000.55}
      ];
    }

    public TrackChanges(index, product) {
      return product.ID;
    }
}
