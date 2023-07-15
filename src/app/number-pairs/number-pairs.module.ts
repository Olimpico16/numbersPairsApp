import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberPairsComponent } from './number-pairs.component';

@NgModule({
  declarations: [NumberPairsComponent],
  imports: [CommonModule, FormsModule],
  exports: [NumberPairsComponent]
})
export class NumberPairsModule { }
