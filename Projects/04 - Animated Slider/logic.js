// Wraper of all scenery elements 
const scene = document.querySelector('.scene');

// All the Day and Night Elements in Node
const allDayEle = document.querySelectorAll('.day')
const allNightEle = document.querySelectorAll('.night')

// Day Elements
const sun = document.querySelector('.sun');
const cloud = document.querySelector('.cloud');
const cloudSmall = document.querySelector('.cloud-small');
const cloudToSmall = document.querySelector('.cloud-tosmall');

// Night Elements
const moon = document.querySelector('.moon');
const star0 = document.querySelector('.star0');
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');


// Day Night Buttons 
const day = document.querySelector('#day')
const night = document.querySelector('#night')

// Event lister to convert day into night or vise vera 
const movCircle = document.querySelector('button')
movCircle.addEventListener('click',mover)

// To Night function from Day
function toNight(e) {


    // Move back Day elements
    leftChange(sun,'-500px');
    leftChange(cloud,'-1190px');
    leftChange(cloudSmall,'-1280px');
    leftChange(cloudToSmall,'-180px');

    // Brin Night Elements
    topChange(moon,'90px')
    rightChange(star0, '100px')
    leftChange(star1,'60px')
    leftChange(star2,'100px')
    rightChange(star3,'70px')
    rightChange(star4,'110px')

    // Change Scene Background Color
    document.body.style.setProperty('--scene-back', "#17377F");

    // Circle Movement  
    e.target.style.left = "-62px"
    e.target.style.backgroundColor = "var(--moon)";

    // Change the status of the moving toggle
    e.target.setAttribute("id", "day");

    // Change opacity of text based on scenery
    document.querySelector('.day-text').style.opacity = "0.2"
    document.querySelector('.night-text').style.opacity = "1"
}

// To day function from night
function toDay(e) {
    // Move back night Items
        topChange(moon,'-290px')
        rightChange(star0, '-100px')
        leftChange(star1,'-60px')
        leftChange(star2,'-100px')
        rightChange(star3,'-70px')
        rightChange(star4,'-100px')

        // Bring Day Items
        leftChange(sun,'150px');
        leftChange(cloud,'190px');
        leftChange(cloudSmall,'280px');
        leftChange(cloudToSmall,'80px');

        // Change Scene Background Color
        document.body.style.setProperty('--scene-back', "#d1f3fc");
        
        // Circle Movement
        e.target.style.left = "62px"
        e.target.style.backgroundColor = "var(--sun)"

        // Change the status of the moving toggle
        e.target.setAttribute("id", "night");

        // Change opacity of text based on scenery
        document.querySelector('.day-text').style.opacity = "1"
        document.querySelector('.night-text').style.opacity = "0.2"
}

// Left position property change
function leftChange(clas,val) {
    clas.style.left = val;
}
// right position property change
function rightChange(clas,val) {
    clas.style.right = val;
}
// top position property change
function topChange(clas,val) {
    clas.style.top = val;
}

// To check what is the current state of scenery and change the scenery based on id of the toggle bar
function mover(e) {
    if(e.target.id === "night") {
        toNight(e)
    } 
    
    else if(e.target.id === "day") {
        toDay(e)
    }
}

