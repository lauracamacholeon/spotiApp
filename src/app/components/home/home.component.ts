import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];

  // constructor(private http:HttpClient) {

  //   // escuchar informacion
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   // subscribir la informacion (se  guarda en data)
  //   .subscribe( (data:any) => {
  //     // console.log(data)
  //     this.paises = data;
  //     console.log(this.paises)

  //   } ) 
  //  }

  nuevasCanciones: any[] = [];
  loading: boolean;

  // crear variable deservicio spotify
  constructor(private _spotify: SpotifyService) {

    this.loading = true;
    this._spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        // cuando ya tengo la data
        this.loading = false;
      });




  }

  ngOnInit(): void {
  }

}
