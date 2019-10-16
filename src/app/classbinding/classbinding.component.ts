import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent {
  public GetEffect() {
    const effect = {
      'back-Effect' : true ,
      textEffects : false ,
      borderEffects : true ,
    };
    return effect;
  }
}
