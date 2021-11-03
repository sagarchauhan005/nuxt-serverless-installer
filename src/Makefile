deploy:
	npm run build
	serverless deploy

setup:
	npm install -g serverless
	npm install serverless-apigw-binary
	npm install serverless-offline
	sudo apt-get install awscli
	@read -p "Enter a VERY UNIQUE name for this lambda service. This shall help in tracking different services and their config.:" service_unique_name; \
	sed -i "/^\([[:space:]]*service: \).*/s//\1$$service_unique_name/" serverless.yml
	$(info Now as a last step, install aws-cli for your OS and then run 'make deploy' as a command)
	$(info https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
	$(info To access your lambda logs directly, please install Bref Dashboard :)
	$(info Visit https://dashboard.bref.sh/ and download the deb package for linux)
