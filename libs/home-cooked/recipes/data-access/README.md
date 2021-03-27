# home-cooked-recipes-data-access

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test home-cooked-recipes-data-access` to execute the unit tests.

To use, $text search in mongodb, run a createIndex query like so: 

`db.recipes.createIndex({ recipeTitle: "text", "recipeBriefInformation.cuisine": "text", recipeInstructions: "text"})`
