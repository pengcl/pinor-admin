import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAuthModule, NbAuthJWTToken, NbAuthSimpleToken, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbSecurityModule, NbRoleProvider} from '@nebular/security';
import {of as observableOf} from 'rxjs';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {DataModule} from './data/data.module';
import {AnalyticsService} from './utils/analytics.service';

const socialLinks = [
  /*{
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  },*/
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
          key: 'jwt', // this parameter tells where to look for the token
        },
        baseEndpoint: '',
        login: {
          // ...
          endpoint: '/api/auth/local',
          method: 'post',
        },
        register: {
          // ...
          endpoint: '/api/auth/local/register',
          method: 'post',
        },
        requestPass: {
          endpoint: '/api/auth/forgot-password',
          method: 'post',
        },
        resetPass: {
          endpoint: '/api/auth/reset-password',
          method: 'post',
        }
      }),
    ],
    forms: {
      login: {
        redirectDelay: 0,
        strategy: 'email',
        rememberMe: true,
        showMessages: {
          success: true,
        },
      },
      register: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      requestPassword: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      resetPassword: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      logout: {
        redirectDelay: 0,
      }
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
