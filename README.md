## Website Performance Optimization portfolio project

#### Part 1: index.html

Visit [http://julianfresco.github.io/udacity.frontenddev.p4/index.html](http://julianfresco.github.io/udacity.frontenddev.p4/index.html)

Optimizations included:

* Minify CSS, JavaScript
* Use inline CSS
* Add async attribute to script tags for non-DOM-rendering JavaScript
* Add media attribute to link tags for remote CSS
* Compress and resize images


#### Part 2: pizza.html

Visit [http://julianfresco.github.io/udacity.frontenddev.p4/views/pizza.html](http://julianfresco.github.io/udacity.frontenddev.p4/views/pizza.html)

Optimizations included:

* Optimize memory usage in for loops in main.js

    Lines 453-457:
    ```javascript
    // Reduces overall times CSSOM is queried, calculations are run

    var pizza = document.querySelector(".randomPizzaContainer"),
    allPizzas = document.querySelectorAll(".randomPizzaContainer");
    var dx = determineDx(pizza, size);
    var newwidth = (pizza.offsetWidth + dx) + 'px';
    ```

    Line 507:
    ```javascript
    // Reduce number of times this calculation is run

    scroll = (document.body.scrollTop / 1250); // Define here to reduce memory allocation
    ```

* Reduce overall number of pizza images (200 -> 30)

    Line 534:
    ```javascript
    // We don't need 200 pizzas on the screen! Only keep 30

    for (var i = 0; i < 30; i++) {
    ```

* Minify CSS, JavaScript
* Use inline CSS
* Compress and resize images
