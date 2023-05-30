export const environment = {
  production: true,
  luv2shopApiUrl: process.env['luv2shopApiUrl'],
  stripePublishableKey: process.env['stripePublishableKey'],
  oidc: {
    clientId: process.env['oidc.clientId'],
    issuer: process.env['oidc.issuer'], 
    redirectUri: process.env['oidc.redirectUri'],
    scopes: process.env['oidc.scopes'].split(",")
  }

};
