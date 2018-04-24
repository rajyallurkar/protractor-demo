import { browser } from 'protractor';
import { constants } from './constants';

const clear = '?clear-session=1';

export class PageObject {
  private pages: Object;

  constructor() {
    this.pages = constants.pages;
  }

  getPageLinks():  Object {
    return this.pages;
  }

  goToHomePage() {
    return browser.get(`${this.pages['home']}`);
  }
  
}
