/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {JwtModule} from "@auth0/angular-jwt";

export function tokenGetter() {
  if (localStorage.getItem('auth_app_token')) {
    const token = JSON.parse(localStorage.getItem('auth_app_token')).value;
    console.log(token);
    return token;
  } else {
    return '';
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['127.0.0.1'],
        blacklistedRoutes: ['127.0.0.1/api/auth/local']
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
})
export class AppModule {
}
