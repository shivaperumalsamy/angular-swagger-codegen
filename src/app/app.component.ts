import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet-Store';
  subscriptions: Subscription[] = [];
  loggedIn = false;

  constructor(private broadcastService: BroadcastService, private authService: MsalService) {}
  

  ngOnInit() { 

    let loginSuccessSubscription: Subscription;
    let loginFailureSubscription: Subscription;


    this.checkAccount();

    loginSuccessSubscription = this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkAccount();
    });

    loginFailureSubscription = this.broadcastService.subscribe('msal:loginFailure', (error) => {
      console.log('Login Fails:', error);
    });

    this.subscriptions.push(loginSuccessSubscription);
    this.subscriptions.push(loginFailureSubscription);

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response.accessToken);
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));

    // Acquire Token Silently
    const requestObj = {
        scopes: ["user.read"]
    };
    this.authService.acquireTokenSilent(requestObj).then(function (tokenResponse) {
        // Callback code here
        console.log(tokenResponse.accessToken);
    }).catch(function (error) {
        console.log(error);
    });
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  checkAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }

  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }

  logout() {
    this.authService.logout();
  }


}
