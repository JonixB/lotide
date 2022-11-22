# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonixb/lotide`

**Require it:**

`const _ = require('@jonixb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()...)`: takes in an array and returns only the first element. 
* `middle(...)`: takes in an array and returns the middle element. If the number of elements is odd, returns the two middle elements instead
* `tail(...)`: takes in an array and returns every other element except the first element.