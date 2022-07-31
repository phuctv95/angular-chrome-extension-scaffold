import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionOptionsComponent, ExtensionOptionsRoutingModule } from '.';



@NgModule({
  declarations: [
    ExtensionOptionsComponent
  ],
  imports: [
    CommonModule,
    ExtensionOptionsRoutingModule
  ]
})
export class ExtensionOptionsModule { }
