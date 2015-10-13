## Website Performance Optimization portfolio project

#### How to use 

    npm install
    gulp build


Distribution files are found in `dist` folder, while source files are found in `src` folder.


#### Part 1: index.html

Visit [http://julianfresco.github.io/udacity.frontenddev.p4/dist/index.html](http://julianfresco.github.io/udacity.frontenddev.p4/dist/index.html)

Optimizations included:

* Minify CSS, JavaScript
* Use inline CSS
* Add async attribute to script tags for non-DOM-rendering JavaScript
* Add media attribute to link tags for remote CSS
* Compress and resize images


#### Part 2: pizza.html

Visit [http://julianfresco.github.io/udacity.frontenddev.p4/dist/pizza.html](http://julianfresco.github.io/udacity.frontenddev.p4/dist/pizza.html)

Optimizations included:

* Optimize memory usage in for loops in main.js

    Lines 481-489:
    ```javascript
    var allPizzas = document.getElementsByClassName("randomPizzaContainer"),
    pizza = allPizzas[0],
    numPizzas = allPizzas.length;
    var dx = determineDx(pizza, size);
    var newwidth = (pizza.offsetWidth + dx) + 'px';

    for (var i = 0; i < numPizzas; i++) {
      allPizzas[i].style.width = newwidth;
    }
    ```

    Lines 504 - 507
    ```javascript
    var pizzasDiv = document.getElementById("randomPizzas");
    for (var i = 2; i < 100; i++) {
      pizzasDiv.appendChild(pizzaElementGenerator(i));
    }
    ```

    Line 539:
    ```javascript
    scroll = (document.body.scrollTop / 1250); // Define here to reduce memory allocation
    ```

* Use more efficient DOM API functions `getElementById` and `getElementsByClassName`

    (Ex) Line 481:
    ```javascript
    var allPizzas = document.getElementsByClassName("randomPizzaContainer"),
    ```

    (Ex) Line 505:
    ```javascript
    var pizzasDiv = document.getElementById("randomPizzas");
    ```


* Reduce number of pizza images to amount needed
* Improve efficiency by declaring variables outside of loop

    Lines 568 - 585:
    ```javascript
    var cols = 8,
    s = 256,
    rows = Math.ceil(document.documentElement.clientHeight / s),
    total = cols * rows,
    elem,
    movers = document.getElementById("movingPizzas1");

    for (var i = 0; i < total; i++) {
        elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "img/pizza.png";
        elem.style.height = "100px";
        elem.style.width = "73.333px";
        elem.basicLeft = (i % cols) * s;
        elem.style.top = (Math.floor(i / cols) * s) + 'px';
        movers.appendChild(elem);
    }
    updatePositions();
    ```

* Minify CSS, JavaScript
* Use inline CSS where applicable
* Compress and resize images
* Add gulp tasks to help
