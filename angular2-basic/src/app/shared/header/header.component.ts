import { Component, OnInit } from '@angular/core';

import { HeaderEventManager } from '../headerEventManager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean = true;

  constructor(private headerEventManager: HeaderEventManager) { }

  ngOnInit() {
    this.headerEventManager.showNavBar.subscribe((model) => {
      this.showNavBar = model;
    });
  }

}
