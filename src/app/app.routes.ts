import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// importar componentes
import { HomeComponent } from "./components/home/home.component";
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
