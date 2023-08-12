import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { InfoComponent } from './views/info/info.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }