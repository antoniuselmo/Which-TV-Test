# Which-TV-Test

This repository contains a collection of tests to check various functionality of https://www.which.co.uk/reviews/televisions


The tests are within a webdriverIO (Selenium /Javascript) project with associated libraries. Chai was used to manage assertions within the project.

Global Dependencies:
-	Node.js	
Project dependencies:
-	npm install

Running Tests:
Run the following commands:
-	selenium-standalone start
-	wdio wdio.conf.js

Assumptions:
-	Screen Type Filters work as expected (Requirements for tests based on behavior)

Limitations:
-  	Would have liked to include Grunt in framework to run tests with one command and so that the server would spin up itself.
- 	With more time test could be adapted to test all filters on the page individually.
-	With more time, would have provided more documentation

Tests:
-	should display the Which TV Reviews page correctly
-	should display description correctly for screen size filter on Which TV Review page
-	should display description correctly for screen type filters

Link to test run video:
https://www.loom.com/share/3d663a121d56409f80243848b9c5e27e


