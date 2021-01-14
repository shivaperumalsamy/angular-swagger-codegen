# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Generate Client Code from API Definition

### Download Swagger Codegen CLI Jar

The v3.0.9 jar can be downloaded from here: [swagger-codegen](https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.9/swagger-codegen-cli-3.0.9.jar). 

### Set npm config variable

In your environment variables, create a variable named `NPM_CONFIG_SWAGGER_CODEGEN_JAR` and it's value as the path of the swagger-codegen-cli jar that was downloaded in the previous step.

```
export NPM_CONFIG_SWAGGER_CODEGEN_JAR=<swagger-codegen-cli-jar-location>
```

### Check npm config

Run:

```bash
npm config list
```

the output will look something like this: swagger-codegen-jar entry should be present!.

```bash
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.9.0 node/v12.6.0 win32 x64"

; environment configs
swagger-codegen-jar = "C:\\Users\\developer\\Applications\\dependencies\\swagger-codeg
en-cli-3.0.9.jar"

; builtin config undefined
prefix = "C:\\Users\\developer\\AppData\\Roaming\\npm"

; node bin location = C:\Program Files\nodejs\node.exe
; cwd = C:\Users\developer\Applications\development\apps\angular-template
; HOME = C:\Users\developer
; "npm config ls -l" to show all defaults.

```

### Generate client code
In your terminal, run

```bash
NPM_CONFIG_SCRIPT_SHELL=bash npm run generate
```
OR Direct way: 
``` 
java -jar <swagger-jar-location> generate -i <swagger-yaml-location> -l typescript-angular -o <location-to-generate-client>

Eg:
java -jar /<swagger-location>/swagger-codegen-cli-3.0.9.jar generate -i ../Pet/src/main/resources/pet-api.yaml -l typescript-angular -o src/app/client/
```
