# Lamdba Deploy

#### Goals

- host a dynamic website / application
- run "serverless" or with zero need for server administration
- write in mainstream programming language with modern features
- easy to deploy
- autoscale based on load
- pay only for utilization
- accessible via HTTPS (WIP)

---

#### Overview

When Amazon's Lambda service is combined with API Gateway + Cloudfront deploying serverless applications can be made simple.

---

#### Scripts

| File          | Path                                          |
|---------------|-----------------------------------------------|
| run-server.sh | Run application locally.                      |
| build.sh      | Compile modern JS into classic NodeJS format. |
| deploy.sh     | Deploy (or update) to AWS Lambda.             |

**run-server.sh**

Allows you to run your application locally. Based on `nodemon` and `babel`, it will automatically re-compile and restart the when code changes are saved.

**build.sh**

Before the application can be deployed to lambda, it needs to be compiled (transpiled) into a Javascript format that will run in a NodeJS environment. This allows the usage of modern JS conventions and speeds up deployment. It may also reduce the memory consumption on Lambda as the deployment is one consolidated .js file.

**deploy.sh**

`build.sh` should be called before running a deployment.

If called with the `create` argument, it will use your local AWS credentials to create all the necessary infrastructure to run your Lambda application.

If called with the `update` argument, it will update the version of your application running on Lambda.

---

#### Get an Amazon AWS Account
You will need an AWS account to utilize these services.

---

#### Create an AWS Profile

Create an AWS profile with the following privelages:

- AmazonAPIGatewayAdministrator
- AWSLambdaFullAccess
- IAMFullAccess

Then, store the private key here: `~/.aws/credentials`

```
[claudia]
aws_access_key_id = SOME_ID
aws_secret_access_key = SOME_KEY
```

---

#### Use the Lambda Deploy Sample Project

[https://github.com/ryan-mahoney/lambda-deploy](https://github.com/ryan-mahoney/lambda-deploy)

It is based on Amazon's own Express (web server) wrapper for AWS Lambda:
[https://github.com/awslabs/aws-serverless-express](https://github.com/awslabs/aws-serverless-express)

---

#### Deploy Project to Lambda

If running the first time, install all dependencies:

```
npm install
```

Create your first build:

```
./build.sh
```

Create your remote Lambda function (with API Gateway and roles):

```
./deploy.sh create
```

Subsequently, update your remote lambda function with code changes:

```
./deploy.sh update
```
