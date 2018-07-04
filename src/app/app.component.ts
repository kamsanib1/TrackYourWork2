import { Component } from '@angular/core';
import {MenuItemComponent} from './shared/menu-item/menu-item.component';
import {FilterViewComponent} from './viewer/filter-view/filter-view.component';
import {SimpleDropdownComponent} from './viewer/simple-dropdown/simple-dropdown.component';
import {DateDropdownComponent} from './viewer/date-dropdown/date-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test = false;
}
