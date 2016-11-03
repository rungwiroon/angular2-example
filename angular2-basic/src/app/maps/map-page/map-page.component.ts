import { Component, OnInit } from '@angular/core';

import { MapModel, MockedMapModel, RealtimeService } from '../shared'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})



export class MapPageComponent implements OnInit {

  public lat: number = 13.7815198;
  public lng: number = 100.6265484;
  public zoom: number = 10;
  public markers: any;//เพื่อมี error
  constructor(private realtimeService: RealtimeService) {

  }

  ngOnInit() {
    this.getPoint()
  }

  public getPoint(): void {
    console.log(">>getPoint");
    //this.markers = MockedMapModel;
    this.realtimeService.get()
      .then(models => {
        console.log(models)
        this.markers = models;
      });
  }

}
