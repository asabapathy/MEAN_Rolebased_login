import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";

const exportedMatModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...exportedMatModules
  ],
  exports: [
    ...exportedMatModules
  ]
})
export class MaterialModule { }
