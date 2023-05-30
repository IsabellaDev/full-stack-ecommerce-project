// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


console.log(process.env['oidc.clientId'])
export const environment = {
  production: false,
  luv2shopApiUrl: process.env['luv2shopApiUrl'],
  stripePublishableKey: process.env['stripePublishableKey'],
  oidc: {
    clientId: process.env['oidc.clientId'],
    issuer: process.env['oidc.issuer'], 
    redirectUri: process.env['oidc.redirectUri'],
    scopes: process.env['oidc.scopes'].split(",")
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
