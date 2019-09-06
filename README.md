# Brewery Website and Keg Tracker

## Description

_Front end of an application to view available kegs in a taproom, and display stats about different craft brews. Developed in React._

## Setup/Installation Requirements

- Install Node.js and NPM, and run the command `npm install --y`
- Run command `npm start` and navigate to `localhost:3000` to view

## User Stories:

- As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
- As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
- As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
- As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
- As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
- As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
- As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than \$5 per pint, perhaps) or the particular style of beer or kombucha.
- As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.\_

## React Component Schema

<p align="center">
<img src="https://github.com/hsdonkin/keg-tracker/blob/master/src/assets/react-components-diagram.png">
</p>

## Link to GitHub Pages

_Link to GitHub repo:_
[Specialty Food Products](https://github.com/hsdonkin/keg-tracker)

### License

- _open source_

Copyright (c) 2019 **_HSD_**
