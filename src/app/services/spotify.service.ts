import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('spotify service ready')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    // OJO: SI FUNCIONA CON UN SOLO TOKEN PARA LOS DOS
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6atVcCtsu0ZKO0kxgWMm4JoXceDXvSkc772ffFGJp7Mb6akKD1yzJxtyZfzcWmeSQNV6AJLzD2vGPuwM'
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    // ya no lonecesito por el query de arriba
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB8Oohvhk7fIAmEebMhAsQT3RjGEb1roa_5IZIaiKJ4luZ8GftAb6AMgAuUHVjhKxdT846F2NUkfC0KOfA'
    // })
    // el limite es 50
    return this.getQuery('browse/new-releases?country=CO&limit=40')
      .pipe(map((data: any) => data.albums.items));

    // va a retornar la infomracion de los albumess
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=ES&limit=50', { headers })
    // .pipe(map((data: any) => data.albums.items));
    // .subscribe( data => {
    //   console.log(data)
    // })
  }

  getArtists(termino: String) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCA61Gq3BsGjsQ-F9r6pp4jP8Jc1bm1hSMRzq1HJpmZi5PCnG1B_Wt9dMZ38HmUKV2jzKRQoEA31DkCk3e-2rdorI7Dnq-NoTD5PIevw0xHgtD4OObx0AuW8ef_YrOmIzPgyNBKeNPh_HU_FfhFoZoHtPkENz4'
    // })


    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, { headers })
    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
      .pipe(map((data: any) => data.artists.items));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, { headers })
    //   .pipe(map((data: any) => {
    //     return data.artists.items;
    //   }))

  }


  // para solo el artista donde mostrara las canciones
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    //  no es necesario pasarlo por el map porque practicamente devuelve la informacion del artista como tla
    // .pipe(map((data:any) => data.ar ))
  }

  getTopTracks(id: string) {
    // https://api.spotify.com/v1/artists/{id}/top-tracks
    return this.getQuery(`artists/${id}/top-tracks?country=CO`)
      .pipe(map((data: any) => data.tracks));
    // no espero unobjeto si no de una vez el arreglo

  }

}
