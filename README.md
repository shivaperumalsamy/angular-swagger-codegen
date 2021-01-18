# Pet Store - Swagger Codegen sample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

# To Generate code from Swagger 
## Generate Client Code from API Definition

### Download Swagger Codegen CLI Jar

The v3.0.9 jar can be downloaded from here: [swagger-codegen](https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.24/swagger-codegen-cli-3.0.24.jar). 

### Configure package.json

Update the swagger_definition config variable with swagger yaml file and swagger_codegen_jar config variable with swagger download jar from above step 

### Generate client code
In your terminal, run

```bash
NPM_CONFIG_SCRIPT_SHELL=bash npm run generate OR 
npm run generate
```
OR Direct way: 
``` 
java -jar <swagger-jar-location> generate -i <swagger-yaml-location> -l typescript-angular -o <location-to-generate-client>

Eg:
java -jar /tmp/swagger-codegen-cli-3.0.9.jar generate -i /tmp/pet-api.yaml -l typescript-angular -o src/app/client/
```
# To run Angular...
## Development server

Run `npm run proxy` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Added service URL in proxy-config.json, this should avoid CORS issue

# Java Spring Codegen using Swagger

Follow my other repository to generate Java Spring Boot codegen using swagger

https://github.com/sivagasc/java-spring-swagger-codegen




