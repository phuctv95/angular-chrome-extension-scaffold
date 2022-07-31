import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtensionPopupComponent } from '.';

const routes: Routes = [
  { path: '', component: ExtensionPopupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionPopupRoutingModule { }
