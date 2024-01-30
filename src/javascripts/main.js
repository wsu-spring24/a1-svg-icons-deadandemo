// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Shaylee Broadus"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else

import * as d3 from "d3";


///////////////////SVG1/////////////////////////////////
//container for mouse Icon
let svg1 = d3.select('main>article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('margin', '20px')
    .style('background', 'white')
    .attr("fill", 'white' );

//bottom curve of mouse
svg1.append('path')
    .style('stroke', 'black')
    .style('stroke-width', 3)
    .attr('d', 'M25,70 C 25,100 75,100 75,70 Z');

//right mouse button
let rclick = svg1.append('path')
    .style('stroke', 'black')
    .style('stroke-width', 3)
    .attr('d', 'M48.5,3 Q25,5 25,33 L48.5,33 Z');

//left mouse button
svg1.append('path')
    .style('stroke', 'black')
    .style('stroke-width', 3)
    .attr('d', 'M51.5,3 Q75,5 75,33 L51.5,33 Z');

//add middle square to fill mouse
svg1.append('rect')
    .attr('width', 50)
    .attr('height', 34)
    .attr('x', 25)
    .attr('y', 38)
    .style('stroke', 'black')
    .style('stroke-width', 3);

//hiding the line between the square and bottom curve
svg1.append('rect')
    .attr('width', 45.6)
    .attr('height', 4)
    .attr('x', 27.2)
    .attr('y', 70)
    .style('stroke', 'white')
    .style('fill', 'white');

//line between mouse buttons
svg1.append('rect')
    .attr('width', 1.75)
    .attr('height', 35)
    .attr('x', 49)
    .attr('y', 0.5)
    .style('fill', "white")
    .style('stroke-width', 0);


////////////////////////SVG2////////////////////////////////

let svg2 = d3.select('main>article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('margin', '20px')
    .style('background', 'white')
    .attr("fill", 'white' );

//liquid in cup
let liquid = svg2.append('path')
    .attr('d','M22,30 L28,88 L71,88 L79,30')
    .style("stroke-width", 3)
    .style('fill', '#0272f0');

//straw
let straw = svg2.append('path')
    .attr('d','M32,88 L75,5 L78,8 L38,88')
    .style("stroke-width", 1)
    .style('stroke', 'black')
    .style('fill', 'transparent');

//top of glass = ellipse
svg2.append('ellipse')
    .attr('cx', 50)
    .attr('cy', 15)
    .attr('rx', 30)
    .attr('ry', 3)
    .style('stroke-width', 2)
    .style('stroke', 'black')
    .style('fill', 'transparent');

//Line around cup
svg2.append('path')
    .attr('d','M20,15 L27.5,88 L72.5,88 L80,14')
    .style("stroke-width", 3)
    .style('stroke', 'black')
    .style('fill', 'transparent');




////////////////////SVG3///////////////////////////////////////////
let svg3= d3.select('main>article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('margin', '20px')
    .style('background', 'white')
    .attr("fill", 'white' );

//top ellipse
svg3.append('ellipse')
    .attr('cx', 30)
    .attr('cy', 20)
    .attr('rx', 5)
    .attr('ry', 12.5)
    .style('stroke', 'black')
    .style('stroke-width', 2);

svg3.append('ellipse')
    .attr('cx', 30)
    .attr('cy', 80)
    .attr('rx', 5)
    .attr('ry', 12.5)
    .style('stroke', 'black')
    .style('stroke-width', 2);

//inside line around phone
svg3.append('path')
    .attr('d', 'M30,32.5 L38,32.5 L40,30 L42,30 C50,50 45,60 43,70 L40,70 L38,67.5 L30,67.5')
    .style('stroke', 'black')
    .style('stroke-width', 2);

//outside line around phone
svg3.append('path')
    .attr('d', 'M30,7.5 L38,7.5 L40,9 C68,5 68,95 40,91 L38,92.5 L30,92.5')
    .style('stroke', 'black')
    .style('stroke-width', 2)
    .style('fill', 'transparent');

//detail dots
svg3.append('ellipse')
    .attr('cx', 29)
    .attr('cy', 77)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 31)
    .attr('cy', 80)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 28)
    .attr('cy', 82)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 30)
    .attr('cy', 85)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5)

svg3.append('ellipse')
    .attr('cx', 29)
    .attr('cy', 17)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 31)
    .attr('cy', 20)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 28)
    .attr('cy', 22)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.append('ellipse')
    .attr('cx', 30)
    .attr('cy', 25)
    .attr('rx', 1)
    .attr('ry', 2)
    .style('stroke', 'black')
    .style('stroke-width', 0.5);

svg3.transition()
    .attr('transform', 'rotate(-45)')




///////////////////SVG4////////////////////////////////////

//////hammer
let svg4= d3.select('main>article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('margin', '20px')
    .style('background', 'white')
    .attr("fill", 'white' );

svg4.append('rect')
    .attr('width', 25)
    .attr('height', 18)
    .attr('x', 30)
    .attr('y', 21)
    .style('fill', 'gray')
    .style('stroke', 'black')
    .style('stroke-width', 2);

//hammer claw top start (45, 41)
//bottom of square: (45, 59)
svg4.append('path')
    .attr('d', 'M55,21 Q76,20 85,43 Q70,30 55,35')
    .style('stroke', 'black')
    .style('fill', 'gray');


//Handle

svg4.append('rect')
    .attr('width', 14)
    .attr('height', 60)
    .attr('x', 38)
    .attr('y', 39)
    .style('fill', 'gray')
    .style('stroke', 'black')
    .style('stroke-width', 2);



//second shape ellipse
svg4.append('ellipse')
    .attr('cx', 30)
    .attr('cy', 30)
    .attr('rx', 3)
    .attr('ry', 10)
    .style('stroke', 'black')
    .style('fill', 'gray')
    .style('stroke-width', 2);

svg4.append('rect')
    .attr('width', 3)
    .attr('height', 22)
    .attr('x', 27)
    .attr('y', 19)
    .style('fill', 'gray')
    .style('stroke-width', 0)

//front ellipse
svg4.append('ellipse')
    .attr('cx', 25)
    .attr('cy', 30)
    .attr('rx', 3)
    .attr('ry', 10)
    .style('stroke', 'black')
    .style('fill', 'gray')
    .style('stroke-width', 2);

//lines to ellipses
svg4.append('path')
    .attr('d', 'M25,20 L30,20')
    .style('stroke', 'black')
    .style('stroke-width', 2);

svg4.append('path')
    .attr('d', 'M25,40 L30,40')
    .style('stroke', 'black')
    .style('stroke-width', 2);

//covering details
svg4.append('rect')
    .attr('width', 3)
    .attr('height', 14)
    .attr('x', 53)
    .attr('y', 22)
    .style('fill', 'gray')
    .style('stroke-width', 0)

svg4.append('rect')
    .attr('width', 12.5)
    .attr('height', 3)
    .attr('x', 38.5)
    .attr('y', 38)
    .style('fill', 'gray')
    .style('stroke-width', 0);

svg4.append('circle')
    .attr('cx', 56)
    .attr('cy', 39)
    .attr('r', 3)
    .style('fill', 'white')

let d0 = svg4.append('rect')
    .attr('width', 12)
    .attr('height', 3)
    .attr('x', 3)
    .attr('y', 28)
    .style('fill', 'white')
    .style('stroke-width', 0);

let d1 = svg4.append('rect')
    .attr('width', 12)
    .attr('height', 3)
    .attr('x', 0)
    .attr('y', 22)
    .style('fill', 'white')
    .style('stroke-width', 0);

let d2 = svg4.append('rect')
    .attr('width', 12)
    .attr('height', 3)
    .attr('x', 0)
    .attr('y', 34)
    .style('fill', 'white')
    .style('stroke-width', 0);



//////////////////////////SVG5///////////////////////////////////////

let svg5 = d3.select('main>article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('margin', '20px')
    .style('background', 'white')
    .attr("fill", 'white' );

//makes the main bell shape
svg5.append('path')
    .attr('d', 'M20,60 Q30,60 30,40 C30,10 70,10 70,40 Q68,60 80,60')
    .style('stroke', 'black')
    .style('fill', '#d1bf1d');

//ellipse under bell
svg5.append('ellipse')
    .attr('cx', 50)
    .attr('cy', 62)
    .attr('rx', 30)
    .attr('ry', 3)
    .style('stroke', 'black')
    .style('fill', 'transparent')
    .style('stroke-width', 1);

//bell thingy
let circ = svg5.append('path')
    .attr('d', 'M46.5,60 A 4 4 0 0 0 54.5,60')
    .style('stroke', 'black')
    .style('fill', 'gray');



/////////////ANIMATIONS//////////////////////////////////

//animate the Mouse icon
MouseMove();
animateDrink();
animatePhone();
animateHammer();
animateBell();
//moves the mouse svg and changes its color like it is clicking
function MouseMove(){
    svg1.transition()
        .attr('transform', 'rotate(45)')
        .delay(1000)
        .duration(1000);
    mouseClick();
}

//changes the color of the element passed
function mouseClick(){

    rclick.transition()
        .delay(2000)
        .duration(250)
        .style('fill', 'grey')
        .transition()
        .style('fill','white');
}

//animate the drink
function animateDrink(){
    liquid.transition()
        .delay(2000)
        .duration(2000)
        .attr('d', 'M25.63,70 L28,88 L71,88, L74.36,70 Z');
    straw.transition()
        .delay(1700)
        .duration(1500)
        .style('fill', '#0272f0')
        .transition()
        .style('fill', 'transparent');
}

//animates the phone icon
function animatePhone(){
    svg3.transition()
        .attr('transform', 'rotate(0)')
        .duration(200)
        .attr('transform', 'rotate(-45)')
        .transition()
        .attr('transform', 'rotate(0)')
        .duration(200)
        .transition()
        .attr('transform', 'rotate(0)')
        .duration(200)
        .attr('transform', 'rotate(-45)')
        .transition()
        .attr('transform', 'rotate(0)')
        .duration(200)
        .transition()
        .attr('transform', 'rotate(0)')
        .duration(200)
        .attr('transform', 'rotate(-45)')
        .transition()
        .attr('transform', 'rotate(0)')
        .duration(200);
}

//animates hammer
function animateHammer(){
    d0.transition()
        .duration(2800)
        .style('fill', 'black')
        .transition()
        .style('fill', 'white');
    d1.transition()
        .attr('transform', 'rotate(35, 15,30)')
        .transition()
        .duration(2800)
        .style('fill', 'black')
        .transition()
        .style('fill', 'white');
    d2.transition()
        .attr('transform', 'rotate(-35,15,30)')
        .transition()
        .duration(2800)
        .style('fill', 'black')
        .transition()
        .style('fill', 'white');

    svg4.transition()
        .delay(500)
        .attr('transform', 'rotate(-45)')
        .duration(300)
        .transition()
        .attr('transform', 'rotate(45)')
        .duration(1000)
        .transition()
        .attr('transform', 'rotate(-45)')
        .duration(300)
        .transition()
        .attr('transform', 'rotate(45)')
        .duration(1000)
        .transition()
        .attr('transform', 'rotate(-45)')
        .duration(300)
        .transition()
        .attr('transform', 'rotate(45)')
        .duration(1000)

}

//animates bell icon
function animateBell(){

    svg5.transition()
        .attr('transform', 'rotate(45)')
        .duration(250)
        .transition()
        .attr('transform', 'rotate(-45)')
        .duration(350)
        .transition()
        .attr('transform', 'rotate(45)')
        .duration(450)
        .transition()
        .attr('transform', 'rotate(-45)')
        .duration(550)

    //bell thingy

   circ.transition()
       .attr('transform', 'translate(-15,0)')
       .duration(300)
       .transition()
       .attr('transform', 'translate(13,0)')
       .duration(400)
       .transition()
       .attr('transform', 'translate(-15,0)')
       .duration(500)
       .transition()
       .attr('transform', 'translate(13,0)')
       .duration(600)

}
