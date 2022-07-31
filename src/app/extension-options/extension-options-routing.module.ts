import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtensionOptionsComponent } from '.';

const routes: Routes = [
  { path: '', component: ExtensionOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionOptionsRoutingModule { }
