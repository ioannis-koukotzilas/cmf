import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Artist } from 'src/app/models/entities/Artist';
import { environment } from 'src/environments/environment';
import { ArtistsDataService } from './artists-data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private titleService: Title, private artistsDataService: ArtistsDataService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${environment.appTitle} - Καλλιτέχνες`);

    this.artists = this.artistsDataService.getArtists();
  }
}