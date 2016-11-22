import { Component, OnInit } from '@angular/core';

import { MarkerModel, MockedMapModel, RealtimeService, Marker } from '../shared'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  providers: [RealtimeService]
})



export class MapPageComponent implements OnInit {

  public lat: number = 13.7815198;
  public lng: number = 100.6265484;
  public zoom: number = 10;
  public markers: Marker[];//เพื่อมี error
  constructor(private realtimeService: RealtimeService) {

  }

  ngOnInit() {
    this.getPoint()
  }

  public getPoint(): void {

    this.realtimeService.get()
      .subscribe(models => {
        if (models) {
          // successful
          this.markers = [];
          console.log(models);
          models.forEach(model => {
            let marker = new MarkerModel();
            marker.Lat = model.Paths[0] && model.Paths[0].lat;
            marker.Lng = model.Paths[0] && model.Paths[0].lng;
            marker.Info = model;

            this.markers.push(marker);
          });
          console.log(this.markers);
        } else {
          // failed

        }
      });

  }

}
