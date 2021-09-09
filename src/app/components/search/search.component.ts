import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  constructor(private spotify: SpotifyService) {
  // this.loading = true;

  }


  busqueda:any[]= [];
  // loading:boolean;

  buscar(termino: string) {

    this.spotify.getArtists(termino)
      .subscribe((data: any) =>{
        this.busqueda = data;
        // this.loading = false;
        console.log(data)
      } )
      
    // this.spotify.getArtist(termino)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     this.busqueda = data;
    //   })

  }


}
