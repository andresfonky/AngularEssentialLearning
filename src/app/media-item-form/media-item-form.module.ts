import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemFormRouting } from './media-item-form.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MediaItemFormRouting
  ],
  declarations: [
    MediaItemFormComponent
  ]
})
export class MediaItemFormModule {}