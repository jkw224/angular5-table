import { Component, OnInit, Inject } from '@angular/core';
import { MockData } from './users-data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'User Table';

  public searchValue = '';

  public users = MockData.users;

  constructor() {}

  ngOnInit() {}
}
