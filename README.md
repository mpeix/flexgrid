# Simple grid using CSS FLEX


## Motivation
I am a fan of css frameworks like [Foundation](https://foundation.zurb.com/) or [Bootstrap](https://getbootstrap.com/), work with their grids and components are easy and 
fast. But sometimes you need something simple, and making a grid with pure css has become an easy thing using
**flex** properties. 

## Setup
To run project you need [nodeJS](https://nodejs.org), open cmd in directory project and run: node server. 
Server will start at port 3005.
_**Use that server for development purpouses only, as it only has basic functionallity._

This project loads data from a json file and builds the HTML dynamically. If you want to change the example 
data modify the items.json file. After that adapt the utils.getBoxHTML() function to adapt the dinamic HTML to
your data.

## CSS -Flex Grid - Explanation
The point to get a responsive grid with flex is having a parent element with the foollowing css properties:

```css
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;   
```

You need to give a width, in this example I have put a 100% but you can give it what you need.


The childs only need a with to be grid aligned. To make a responsive grid give them a diferent with using media queries. For mobile you can give a child a 90% of parents width, and you will get a box column.

For bigger screens give less with to childs, if you want a 4 columns with give a with of 23% to childs. (don't give a 25% width for 4 columns grid as some space needs to be reserved to margin).

### Last row aligment
When using  *jsutify-content:space-between* it works well when a row is full of columns. But can happens
that the last row has less columns. I that case de last column rows are not aligned. Fortunatelly there is a trick
to aling the items of last row. It consist in to adding hidden html elments. The number of hidden elements has
to be equal than: **max-Number-Of-Columns - 1**.  The hidden elements must have the same margins as box containers.
