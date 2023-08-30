import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { InfoComponent } from './views/info/info.component';
import { ContactComponent } from './views/contact/contact.component';
import { SponsorsComponent } from './views/sponsors/sponsors.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sponsors', component: SponsorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }