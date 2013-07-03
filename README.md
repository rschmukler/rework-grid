# rework-grid

Grid system for rework. Based off of 960.gs

# Example

    var rework = require('rework'),
        grid = require('rework-grid');

    var gridConfig = {
      numColumns = 12,
      gutterWidth = 20,
      width = 960
    }

    rework('some css').use(rework.mixin(grid(gridConfig)));


# Added Properties

## grid-column(size)

Defines a column of `size`

## grid-position(centered|alpha|omega)

Specifies the position of the given column.

## grid-container(true)

Specifies the element be styled as a grid container
