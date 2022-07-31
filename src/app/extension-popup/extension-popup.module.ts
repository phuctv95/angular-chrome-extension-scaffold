import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionPopupComponent } from './components/extension-popup/extension-popup.component';
import { ExtensionPopupRoutingModule } from './extension-popup-routing.module';



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
