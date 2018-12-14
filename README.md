# Alternative AngularJS migration using iframes demo

## Introduction

This sample app demonstrates how you can migrate an AngularJS application to Angular using iframes.

This solution isn't for everyone, but if you have a particularly challenging AngularJS application, one that doesn't quite fit into the official migration strategy then this solution might be best for you.

This is a great solution if:

- If you AngularJS app depends on a lot of legacy 3rd party modules.
- If your AngularJS app uses an old UI framework like Bootstrap 2 and at the same time you migrate to Angular you also want to move to a newer UI framework like Bootstrap 4.
- If you have a very old AngularJS app, even pre 1.0, then this solution works.
- If your AngularJS app is architected poorly, does not use current best practices, uses controllers over components, relies on scope inheritance, $scope.$watch, emit and broadcast.
- Is not an SPA, this solution will work even if your AngularJS application is a Multi Page Application and you want to iteratively migrate to an Angular SPA.

## How it works

We solve this by having Angular as the host application and them migrating one route at a time from AngularJS to Angular.

If the route has been migrated to Angular then Angular handles the route and displays that page.

if the route has not been migrated to Angular it instead iframes in the appropriate AngularJS app page.

We use localStorage and StorageEvent to share state between our Angular and AngularJS applications.

If we are displaying the AngularJS page and the user clicks on a route which AngularJS can't handle (it's been migrated to the host Angular app) then it propogates the route change request to the Angular app and lets it see if it can handle the route.

## Folder structure

```
angular-app // this is the angular application
angularjs-app // this is the legacy angularjs application we want to migrate from
server.js // this is the webserver which serves both from the same host
```

## Setup & Run

First we need to build the angular application using the Angular CLI

```
cd angular-app
npm install
ng build
```

- Run the main server.

```
npm install
npm start
```

This launches a web-server running on http://localhost:8080

The `/` path serves the angular application.
The `/legacy` path serves the angularjs application.

