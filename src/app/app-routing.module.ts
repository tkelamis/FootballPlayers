import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TabPageComponent } from './tab-page/tab-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tabs', component: TabPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
