# Trader

## Languages: 
Nodejs, JavaScript, HTML, CSS, ?

## Objectives:
* End: Buiding a Trading Bot (Optimistic Goal) (Crypto, or maybe Stock as well)
* 1: Build a Financial Chart with Indicators like EMA (Static Data)
	* a: D3 seemed like a possible option
* 2: Link Chart to RealTime data from a exchange api
* 3: Store data in database for history tracking and trend analysis
* 4: If possible find back data for 2+ years or more.
* 5: Using the back data define a good buy/sell practice.
* 6: Develop a strategy to get my result.
* 7: Design a way to test strategy.
* 8: Design a way to future test strategy.
* 9: Impliment strategy.
	* a: for strategy to go live it must be tested with back data, then live paper trade. (Workflow)

This doesn't work but I am trying to get Nodejs, browserify, d3, d3fc to all work together.
Open to suggestions, I am looking for simple.  This is only for learning how all these things work together.

for this first part, I am trying to build decent charts to read from a exchange api JSON or possibly back data from a database.
Inorder to get to the next step I need to figure out how to get the basic chart loaded.

## The Adventure Log:

01/21/2020: Kinda lost interest with the chart, for the time. 
Not sure if D3 is the right chart handler but seems to be acceptable so far.
I am going to see if I can connect to a web service for RealTime data.
This at least gets me to a point where, if and when, I continue the chart I can at least link with data.  
Realized I needed some structure to support environment variables and secret information to start this.

01/04/2020: Made progress on getting things loaded by switching to browserify.
I was able to get it to re-browserify bundle.js to distBundle.js at runtime in the server.js.
I now have a candlestick chart with static data and playing with things like indicators, menu, buttons, etc.
Was unable to figure out how to add indicators, menus, etc. at this time.  Did try following example.

## Things I still want to figure out:
* How to include a normal js files (I suspect they need to be Browser-fied but this depends on where/when they are needed).
* Better ways to split code up, folder structure, functionifying code.

## References:
* D3 https://d3js.org/ 
* D3FC https://d3fc.io/
* Browserify http://browserify.org/
* gekko https://gekko.wizb.it/ & https://github.com/askmike/gekko
	* had a good start and mostly functional but seems to have lost most of the community, creator still around but too busy to focus on project as of (1/21/2020).
	* has several forks that might be promising.  

## Changelog 
(Changes could have been over periods of time since last entry):

01/21/2020: Been researching things off and on as I have free time.
* added notes to README.md.
* added updates to .gitignore to support changes. Noted that Visual Studio adds a bunch of stuff to .gitignore.
* added dotenv 8.2.0, (npm install dotenv --save), when needed use require('dotenv').config();
* added .env for global environment variables.  No secrets allowed, only public data.  OK for GitHub.
* added config.js, will be where secrets are stored.  Not OK for github.  (require('./config.js');)
* added config.js.example, template for the config.js file with instructions.

  "dependencies": {
    "browserify": "^16.5.0",
    "d3": "^5.15.0",
    "d3fc": "^14.0.60",
    "dotenv": "^8.2.0",
    "watchify": "^3.11.1"
  }

~01/04/2020: Close enough to the original start of this.
* Created the basic structure and started everything.  Not going to define everything that changed during this time.


## Readme Notes:
&#35;  #