import { Component, OnInit } from '@angular/core';

interface LanguageMapping {
  [key: string]: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  displayLanguage: string = 'en';
  languageList = [
    { code: 'en', name: 'English' },
    { code: 'tw', name: 'Traditional-Chinese' },
    { code: 'jp', name: 'Japan' }
  ];
  get i18nLang() {
    const mapping: LanguageMapping = {
      en: 'US',
      tw: 'ZH',
      jp: 'JP'
    }
    return mapping[this.displayLanguage];
  }

  constructor() { }
  
  ngOnInit() {
    this.displayLanguage = this.getCurrentLanguage();
  }

  onSelectionChange($event: string) {
    this.redirectTo($event);
  }

  private redirectTo(redirectLang: string) {
    const redirectPathName = window.location.pathname.replace(`/${this.displayLanguage}/`, `/${redirectLang}/`);
    window.location.pathname = redirectPathName;
  }

  private getCurrentLanguage = () => {
    const lang = ['en', 'tw', 'jp'];
    const currentLang = lang.find(l => new RegExp(`/${l}/`).test(window.location.pathname));
    if (!currentLang) {
      return 'en';
    }
    return currentLang;
  };

}
