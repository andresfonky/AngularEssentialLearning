import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const formRoutes: Routes = [
  { path: '', component: MediaItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class MediaItemFormRouting { }
