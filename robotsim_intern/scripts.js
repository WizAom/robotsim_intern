import Grid from './app/grid/Grid.class.js'
import gridConfig from './app/config/grid.config.js'

const grid = new Grid( gridConfig )

// var btn = document.getElementById("btn")

// btn.addEventListener('click', function (){
    // let {rowOut,colOut} = reformPos(btn.value)
    grid.build()
    grid.draw()
// })

