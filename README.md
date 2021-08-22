# D3-React
[toc]

## why not d3 API?

* ***Declarative* instead of *imperative***
  The code describes *what* is being drawn, instead of *how* to draw it.
* **Less code**
  Our second `Circle` component has fewer than two-thirds the number of lines as our first iteration
* **Less hacky**
  React is, chiefly, a rendering library, and has many optimizations to keep our web apps performant. When adding elements using d3, we're hacking around React, and essentially have to fight *against* those optimizations. Hacking around your JS framework is a recipe for future frustration, especially if the framework's API changes.

