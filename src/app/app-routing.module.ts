import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'popup',
    loadChildren: () => import('./extension-popup/extension-popup.module').then((m) => m.ExtensionPopupModule),
  },
  {
    path: 'options',
    loadChildren: () => import('./extension-options/extension-options.module').then(m => m.ExtensionOptionsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
