import { Component, OnInit } from '@angular/core';
import { PlaceFetchService } from '../place-fetch.service';


@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  public places:any = [] ;
  constructor(private plyFetch :  PlaceFetchService) { }

  ngOnInit(): void {
    this.plyFetch.getPlaces()
    .subscribe(
      (data) => {console.log(data.msg[0]);
        this.places = data.msg;
      }
      );
  }
}