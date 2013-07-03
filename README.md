# rework-grid

Grid system for rework. Based off of 960.gs

# Example

    var rework = require('rework'),
        grid = require('rework-grid');

    grid.numColumns = 12;
    grid.gutterWidth = 20;
    grid.width = 960;

    rework('some css').use(grid);


# Added Properties

## grid-column(size)

Defines a column of `size`

## grid-position(centered|alpha|omega)

Specifies the position of the given column.

## grid-container(true)

Specifies the element be styled as a grid container
