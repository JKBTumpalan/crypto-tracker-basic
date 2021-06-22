import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Crypto Tracker';

  constructor() {}

  ngOnInit(): void {}

  toggleAddCrypto(): void {
    console.log('Add crypto.');
  }
}
