# todo-app

**DOMAIN**: TODO List  
**INTERFACE**: WEB UI (SPA)  
**PLATFORM**: NodeJS  
**LANGUAGE**: JavaScript  


## Instructions for running the app:
1. Unzip the project folder (if zipped)
2. `$ cd /path/to/unzipped/folder/`
3. `$ npm install`
4. `$ grunt serve`


## Project Structure
Because this kind of project is auto-generated, there are lots of superfluous files.
The bulk of my personal work is in `app/scripts/controllers/` and `app/views/`.

## Additional Notes:
#### Choice of Project:  
I chose these particular settings because I am more familiar with Javascript than Java.
I do full stack work with Python most days, and have only worked with Java in an academic context (testing sorting algorithms, big O comparisons, etc.) I'd like to get more familiar with Java (and C#) if this offer works out. (While I am capable at front end, I prefer full stack work.)

#### Testing:  
Running `grunt test` does allow for unit testing with karma, but because this project
depends on both localStorage and HTML pages/views, it is not very testable without
something like Selenium to go and actually click through the features. Let me know if you would like to see a certain kind of testing done in this context and I can have it to you in a few days.

#### Storage:
I chose to use localStorage since this was persistent enough to develop with.
Obviously the calls to $window.localStorage would be replaced with GET/POST/PUSH/DELETE
calls in some kind of AJAX=>Backend=>DB chain.


#### I used the following steps to set up this app:  
`$ npm -v`  
`no5.0.3`  
`$ node -v`  
`v8.1.4`  
`$ npm install -g grunt-cli bower yo generator-karma generator-angular`  
`$ npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core   phantomjs-prebuilt --save-dev`  
`$ npm install angularjs-datepicker --save`  
