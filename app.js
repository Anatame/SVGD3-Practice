var currentX = 15;
var currentY = 15;
var values = [2, 8, 1, 2];
var svg = d3.select('body')
    .append('svg')
    .attr('transform', 'scale(8)')
    .attr('transform-origin', '0 0')
    

var circleGroup = svg.append('g');

values.forEach(x => drawProportionalCircle(circleGroup, x))

function drawProportionalCircle(circleGroup, radius) {
    circleGroup
        .append('circle')
        .attr('fill', 'red')
        .attr('r', Math.sqrt(radius))
        .attr('cx', currentX)
        .attr('cy', currentY)

    currentX += 15;
}