// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  luv2shopApiUrl: "https://localhost:8443/api",
  stripePublishableKey: "pk_test_51N74GUAVhVXlcUjUI3W2hNzMhaq64MfF3HSvnCZT6YUmRd4FdFLsmXhRQ6PjKs6Q4XLQi9WQ6MlZklH1jzdhB3iQ00hoTfVM59",
  oidc: {
    clientId: '0oa6x8sfe1oJogyz05d7', 
    issuer: 'https://dev-91710680.okta.com/oauth2/default', 
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: 'openid,profile,email'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
