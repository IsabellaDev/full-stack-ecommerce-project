const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config({path: './environments/*'});

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

// access to our environment variables in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   luv2shopApiUrl: "${process.env["luv2shopApiUrl"]}",
   stripePublishableKey: "${process.env["stripePublishableKey"]}",
   oidc.clientId: "${process.env["oidc.clientId"]}",
   oidc.issuer: "${process.env["oidc.issuer"]}",
   oidc.redirectUri: "${process.env["oidc.redirectUri"]}",
   oidc.scopes: "${process.env["oidc.scopes"]}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }

   console.log(`Wrote variables to ${targetPath}`);
});