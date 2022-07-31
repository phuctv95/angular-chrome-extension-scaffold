import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExtensionPage } from 'src/shared/enums/extension-page';
import { StorageData } from 'src/shared/models/storage-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    chrome.storage.local.get().then((data: StorageData) => {
      const page = data.currentPage;
      if (page === ExtensionPage.Popup) {
        this.router.navigate(['popup']);
      } else if (page === ExtensionPage.Options) {
        this.router.navigate(['options']);
      } else {
        throw new Error('"currentPage" value is invalid.');
      }
    });
  }
}
