localStorage.setItem('hoveredAlready', false)

$(".slimboExtra").on('mouseover', () => {
    //console.log(`Hovered!`)
    if (!hoveredAlready) {
        localStorage.setItem('hoveredAlready', true)
    }
})