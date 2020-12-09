import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(
      () => {
        document.querySelector('.left').className = 'left ready';
        document.querySelector('.right').className = 'right ready';
      },
      18500
    );
    setTimeout(
      () => {
        document.querySelector('.hero').className = 'hero ready';
      },
      19000
    );
    setTimeout(
      () => {
        document.querySelector('.inner').className = 'inner ready';
      },
      20000
    );
  }

}
