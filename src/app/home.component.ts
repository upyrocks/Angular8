import {Component} from '@angular/core';

@Component({
    selector : 'app-home',
    template : '<h2>{{title}}</h2>',
    styles : ['h2{background-color:yellow}']
})

export class HomeComponent {
    public title = 'Welcome to Angular';
}
