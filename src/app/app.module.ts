import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import { ProgramComponent } from './views/program/program.component';
import { InfoComponent } from './views/info/info.component';
import { ContactComponent } from './views/contact/contact.component';
import { ArtistsComponent } from './views/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProgramComponent,
    InfoComponent,
    ContactComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
