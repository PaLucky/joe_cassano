import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
  constructor(private router: Router){
    router.events.subscribe(() => window.scrollTo(0, 0))
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(
        ()=> document.querySelector('video').className = 'fade',
        18000
    );
    setTimeout(
        ()=> document.querySelector('body').className = 'scroll',
        18000
    );
  }
}

