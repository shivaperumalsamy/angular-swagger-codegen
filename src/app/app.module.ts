import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';


import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsStatusComponent } from './components/pets-status/pets-status.component';
import { PetsStatusService } from './services/pets-status.service'
import { Configuration, PetService } from './client';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

const getAPIConfiguration = () => {
  console.debug("getAPIConfiguration() called")
  return new Configuration({
    basePath: environment.apiUrl,
    accessToken: () => {
        console.log("getting access token")
        // console.debug("getting access token", {
        //   hasValidAccessToken: oauthService.hasValidAccessToken(),
        //   expiration: oauthService.getAccessTokenExpiration(),
        //   token: oauthService.getAccessToken(),
        // })
        return "mytoken-testing"
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    PetsStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth: {
        clientId: environment.clientId,
        authority: environment.authority,
        redirectUri: environment.redirectUrl,
        validateAuthority: true,
        postLogoutRedirectUri: environment.redirectUrl,
        navigateToLoginRequestUrl: true
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    },
    {
      popUp: !isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: Configuration,
      useFactory: getAPIConfiguration,
      multi: false,
    },
    PetsStatusService,
    PetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
