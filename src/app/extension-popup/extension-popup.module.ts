import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionPopupComponent, ExtensionPopupRoutingModule } from '.';



@NgModule({
  declarations: [
    ExtensionPopupComponent
  ],
  imports: [
    CommonModule,
    ExtensionPopupRoutingModule
  ]
})
export class ExtensionPopupModule { }
