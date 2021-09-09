import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = [];
  loading:boolean;
  topTracks: any = [];

  constructor(private activatedRouter: ActivatedRoute, private SpotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRouter.params.subscribe(params => {
      console.log(params.id);
      this.getArtista(params.id);
      this.getTopTracks(params.id)
    })
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.SpotifyService.getArtist(id)
      .subscribe(artista => {
        this.artista = artista;
        // console.log(this.artista);
        this.loading= false;
      })
  }

  getTopTracks(id:string){
    this.SpotifyService.getTopTracks(id)
    .subscribe(topTracks =>{
      this.topTracks = topTracks;
      console.log(this.topTracks)

    })

  }

}
