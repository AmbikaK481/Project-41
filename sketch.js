Drop
Umbrella
thunder
img1,img2,img3,img4
function preload(){
    img1 = loadImage('1.png')
    img2 = loadImage('2.png')
    img3 = loadImage('3.png')
    img4 = loadImage('4.png')
}

function setup(){
   createCanvas(800,700)
   Umbrella = new umbrella
   Umbrella = createSprite(540,370,20,10)
   Drop = new drop
   Drop = createSprite(250,480,10,5)
}

function draw(){
display()
displayDrop()
update()

if (frameCount % 12 === 0) {
    thunder = createSprite(random(120, 1200), 0, 120, 120);
    thunder.velocityY = 6;
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: thunder.addImage("1",img1);
        break;
        case 2: thunder.addImage("1", img2);
        break;
        case 3: thunder.addImage("1", img3);
        break;
        case 4: thunder.addImage("1", img4);
        break;
    }
}   

function push(){
    var maxDrops = 100;
    for(var i=0; i<maxDrops, i++;){
        drops.push(new createDrop(random(0,400),random(0,400)))
    }
}
}
