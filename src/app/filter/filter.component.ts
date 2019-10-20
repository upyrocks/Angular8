import { Component , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() public All = 0;
  @Input() public Electronics = 0;
  @Input() public Shoes = 0;

  public SelectedCategoryValue = 'All';

  @Output() public ComponentChanges: EventEmitter<string> = new EventEmitter<string>();

  public onCategoryChanged() {
    this.ComponentChanges.emit(this.SelectedCategoryValue);
  }
}
