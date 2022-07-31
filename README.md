# Chrome Extension Scaffold using Angular

This is a scaffold for Chrome Extension development using Angular framework.

## Setup

1. Install `pnpm` if not yet. Run `pnpm install`.
2. For development, run `pnpm run watch-angular` and `pnpm run watch-chrome-extension-webpack`.
3. The built files are in the `dist/angular-chrome-extension-scaffold` folder.

To build for production, run `pnpm run build-prod`.

## Code Structure

There are basically 2 builds:
1. One is for building **Manifest file**, **Background script**, **Content scripts** (they are in `src/chrome-extension` folder, the folder also contains some Popup and Options files, but are just for redirecting to Angular built `index.html`);
2. The second one is for building **Popup page** and **Options page** (Angular code).

Folders you should care for development:
- `src/chrome-extension` folder:
  + `manifest.json`: the _Manifest file_.
  + `background.ts`: the _Background script_.
  + `content-script.ts/.css`: the _Content scripts_.
  + In `.ts` files, you can only `import` order things (interfaces, enums, etc.) from this folder or in `app/shared`. To be able to import from more, edit in the `[ts-loader include section]` in `chrome-extension-webpack.config.js`.
- `app/extension-popup` folder: the _Popup page_.
- `app/extension-options` folder: the _Options page_.
- `app/shared` folder: contains common code shared between 2 mentions builds above.
