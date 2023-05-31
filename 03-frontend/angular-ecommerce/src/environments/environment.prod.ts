export const environment = {
  production: true,
  luv2shopApiUrl: process.env['luv2shopApiUrl'],
  stripePublishableKey: process.env['stripePublishableKey'],
  oidc: {
    clientId: process.env['clientId'],
    issuer: process.env['issuer'], 
    redirectUri: process.env['redirectUri'],
    scopes: process.env['scopes'].split(",")
  }

};
