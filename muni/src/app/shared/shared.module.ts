import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent, ReactiveFormsModule],
})
export class SharedModule {}
