import { Component, OnInit } from '@angular/core';

import { MapModel, MockedMapModel } from '../shared';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  public lat: number = 13.7815198;
  public lng: number = 100.6365484;
  public zoom: number = 10;
  public markers: MapModel[];

  constructor() { }

  ngOnInit() {
    this.getPoint();
  }

  public getPoint(): void {
    this.markers = MockedMapModel;
  }

  public circleDragEnd(event: any): void {
    console.log(event);
  }
}
