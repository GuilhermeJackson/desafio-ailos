import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoperativeComponent } from './coperative/add-coperative.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coperative', component: AddCoperativeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
