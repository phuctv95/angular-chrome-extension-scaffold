import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionOptionsComponent } from './components/extension-options/extension-options.component';
import { ExtensionOptionsRoutingModule } from './extension-options-routing.module';



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
