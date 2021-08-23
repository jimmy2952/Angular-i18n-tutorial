// src/app/i18n-form/i18n-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

const cityList = [
  {
    id: 1,
    name: $localize`:@@TaipeiCity:Taipei City`
  },
  {
    id: 2,
    name: $localize`:@@NewTaipeiCity:New Taipei City`
  },
  {
    id: 3,
    name: $localize`:@@KeelungCity:Keelung City`
  }
]

@Component({
  selector: 'app-i18n-form',
  templateUrl: './i18n-form.component.html',
  styleUrls: ['./i18n-form.component.css']
})
export class I18nFormComponent implements OnInit {
  cityList = cityList;
  i18nForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      address: [1, [Validators.required]]
    }
  );
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.i18nForm.reset();
  }

  onSubmit(): void {
    console.log(this.i18nForm.getRawValue());
  }
}
