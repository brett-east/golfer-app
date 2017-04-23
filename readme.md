# Golfer Profile App

I created this app as a bit of a test to try out some react components and bring in some API data.

As it turned out the API was going to cost money, so I just made a couple of calls and stored all the raw data. So this app doesn't actually make any calls to any APIs, it just uses data that I collected in a couple of calls.

I wrote a quick little helper function that I ran to combine the two raw json files that I got into a filtered list, that I use to set state with.

## Functionality

This app doesn't do a whole lot other than display a list of the top 100 golfers at the time I made this, and then allows you to filter them by name. The primary goal of the exercise was to see if I could create a react project with a redux store.

## Setup

To setup the project, clone the repo and run `yarn install` to get all the dependencies. Then run `webpack` to build the bundle file (don't actually have to do this, the bundle file is included). `yarn run test` will run the karma tests.

## Hosted on Heroku

[http://tranquil-springs-32665.herokuapp.com/]
