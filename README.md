# Trader

## Languages: 
Nodejs, JavaScript, HTML, CSS, ?

## Objectives:
* End: Buiding a Crypto Trading Bot (Optimistic Goal)
* 1: Build a Financial Chart with Indicators like EMA (Static Data)
	* a: D3 seemed like a possible option
* 2: Link Chart to RealTime data from a exchange api
* 3: Store data in database for history tracking and trend analysis
* 4: If possible find back data for 2+ years or more.
* 5: Using the back data map out good buy/sell practice.
* 6: Develop a strategy to get my result.
* 7: Design a way to test strategy.
* 8: Design a way to future test strategy.
* 9: Impliment strategy.
	* a: for strategy to go live it must be tested with back data, then live data. (Workflow)

This doesn't work but I am trying to get Nodejs, browserify, d3, d3fc to all work together.
Open to suggestions, I am looking for simple.  This is only for learning how all these things work together.

for this first part, I am trying to build decent charts to read from a exchange api JSON or possibly back data from a database.
Inorder to get to the next step I need to figure out how to get the basic chart loaded.

## Notes:
&#35;1: made progress on getting things loaded by switching to browserify.
I was able to get it to re-browserify bundle.js to distBundle.js at runtime in the server.js.
I now have a candlestick chart with static data and playing with things like indicators, menu, buttons, etc.

Now that I am thinking about it, I might be able to do a single browerify on homepage first load.

## Things I still want to figure out:
How to include a normal js files that may not be functions.
Better ways to split code up.

## References:
* D3 https://d3js.org/ 
* D3FC https://d3fc.io/
* Browserify http://browserify.org/