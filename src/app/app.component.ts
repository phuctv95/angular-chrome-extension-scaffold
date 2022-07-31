import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExtensionPage } from 'src/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    chrome.storage.local.get().then(data => {
      const page: ExtensionPage = data['extensionPage'];
      if (page === ExtensionPage.Popup) {
        this.router.navigate(['popup']);
      } else if (page === ExtensionPage.Options) {
        this.router.navigate(['options']);
      } else {
        throw new Error('"extensionPage" value is invalid.');
      }
    });
  }
}
