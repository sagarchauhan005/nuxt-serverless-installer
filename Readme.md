# Nuxt Serverless Installer

A simple nuxt installer package that guides you into installing a fully optimised Nuxt Serverless app

# Installation

- Run `npm install @sagarchauhan005/nuxt-serverless-installer` into your app and then follow the steps.
- Run `make setup` to set up the project.
- Modify your nuxt.config file from
   ````
   exports default {
   ````
  to
   ````
   module.exports = {
   ````
- Finally, run `make deploy` to deploy your app.
- To access your lambda logs directly, please install Bref Dashboard (Visit https://dashboard.bref.sh/ and download the deb package for linux)
<hr>

#Manual Installation

## Run Setup

1. Run the following command.
  ```
    npm install -g serverless
    npm install serverless-apigw-binary
    npm install serverless-offline
  ```

2. Go to your serverless.yml file and enter your own "UNIQUE" service name

```
service: <your-dummy-site-name>  # service: kartmax-nuxt-dummy-site
```

3. Modify your nuxt.config file from 
   ````
   exports default {
   ````
   to
   ````
   module.exports = {
   ````
   
4. Now as a last step, install aws-cli for your OS and then run 'serverless deploy' as a command (https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
5. To access your lambda logs directly, please install Bref Dashboard (Visit https://dashboard.bref.sh/ and download the deb package for linux)

# Author

[Sagar Chauhan](https://twitter.com/sagarchauhan005) works as a Project Manager - Technology at [Greenhonchos](https://www.greenhonchos.com).
In his spare time, he hunts bug as a Bug Bounty Hunter.
Follow him at [Instagram](https://www.instagram.com/chauhansahab005/), [Twitter](https://twitter.com/chauhansahab005),  [Facebook](https://facebook.com/sagar.chauhan3),
[Github](https://github.com/sagarchauhan005)

# License
MIT
