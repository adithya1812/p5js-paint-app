let c,cursorSize,bg,dist1,dist2,random1,random2,clear0;
function setup() {
  resetSketch()
  random1=createButton('Random Colour')
  random1.position(100,4)
  random1.mousePressed(randomColour)
  clear0=createButton('Clear')
  clear0.position(130,27)
  clear0.mousePressed(resetSketch)
}
function resetSketch(){
  createCanvas(windowWidth, windowHeight);
  c = 'black';
  cursorSize = 10;
  background(255)
}
function randomColour(){
  let random2 = color(random(0,255),random(0,255),random(0,255))
  c=random2
}
function draw() {
  if(mouseIsPressed && mouseY<height-60 && mouseY>50){
  stroke(c);
  strokeWeight(cursorSize);
  line(mouseX,mouseY,pmouseX,pmouseY);
  }
  if(keyIsPressed){
    if(key == 'r'){
      c = 'red'
    }
    else if(key == 'o'){
      c = 'orange'
    }
    else if(key == 'y'){
      c = 'yellow'
    }
    else if(key == 'g'){
      c = 'lime'
    }
    else if(key == 'b'){
      c = 'dodgerblue'
    }
    else if(key == 'v'){
      c = 'violet'
    }
    else if(key == 'c'){
      c = 'cyan'
    }
    else if(key == 'j'){
      c = 'green'
    }
    else if(key == 'p'){
      c = 'pink'
    }
    else if(key == '0'){
      c ='saddlebrown'
    }
    else if(key == '1'){
      c = 'black'
    }
    else if(key == 'e'){
      c = 'white'
    }
    else if(key == 'ArrowUp'){
      cursorSize+=0.5
    }
    else if(key == 'ArrowDown'){
      cursorSize-=0.5
    }
    else if(key == 'Enter'){
      randomColour()
    }
    else if (key == 'Backspace'){
      resetSketch()
    }
  }
  noStroke();
  fill('red');
  rect(0,height-50,50,50);
  if(mouseIsPressed && mouseX>0 && mouseX<50 && 
     mouseY>height-50 && mouseY<height){
    c= 'red'
  }
  fill('orange');
  rect(50,height-50,50,50);
  if(mouseIsPressed && mouseX>50 && mouseX<=100 &&
     mouseY>height-50 && mouseY<height){
    c='orange'
  }
  fill('yellow');
  rect(100,height-50,50,50);
  if(mouseIsPressed && mouseX>100 && mouseX<=150 &&
     mouseY>height-50 && mouseY<height){
    c='yellow'
  }
  fill('lime');
  rect(150,height-50,50,50);
  if(mouseIsPressed && mouseX>150 && mouseX<=200 &&
     mouseY>height-50 && mouseY<height){
    c='lime'
  }
  fill('dodgerblue');
  rect(200,height-50,50,50);
  if(mouseIsPressed && mouseX>200 && mouseX<=250 &&
     mouseY>height-50 && mouseY<height){
    c='dodgerblue'
  }
  fill('violet');
  rect(250,height-50,50,50);
  if(mouseIsPressed && mouseX>250 && mouseX<=300 &&
     mouseY>height-50 && mouseY<height){
    c='violet'
  }
  fill('cyan');
  rect(300,height-50,50,50);
  if(mouseIsPressed && mouseX>300 && mouseX<=350 &&
     mouseY>height-50 && mouseY<height){
    c='cyan'
  }
  fill('green')
  rect(350,height-50,50,50)
  if(mouseIsPressed && mouseX>350 && mouseX<=400 &&
     mouseY>height-50 && mouseY<height){
    c='green' 
  }
  fill('pink')
  rect(400,height-50,50,50)
  if(mouseIsPressed && mouseX>400 && mouseX<=450 &&
     mouseY>height-50 && mouseY<height){
    c='pink'
  }
  fill('saddlebrown')
  rect(450,height-50,50,50)
  if(mouseIsPressed && mouseX>450 && mouseX<=500 &&
     mouseY>height-50 && mouseY<height){
    c='saddlebrown'
  }
  fill('antiquewhite')
  rect(500,height-50,50,50)
  if(mouseIsPressed && mouseX>500 && mouseX<=550 &&
     mouseY>height-50 && mouseY<height){
    c='antiquewhite'
  }
  fill('aquamarine')
  rect(550,height-50,50,50)
  if(mouseIsPressed && mouseX>550 && mouseX<=600 &&
     mouseY>height-50 && mouseY<height){
    c='aquamarine'
  }
  fill('cornsilk')
  rect(600,height-50,50,50)
  if(mouseIsPressed && mouseX>600 && mouseX<=650 &&
     mouseY>height-50 && mouseY<height){
    c='cornsilk'
  }
  fill('crimson')
  rect(650,height-50,50,50)
  if(mouseIsPressed && mouseX>650 && mouseX<=700 &&
     mouseY>height-50 && mouseY<height){
    c='crimson'
  }
  fill('darkblue')
  rect(700,height-50,50,50)
  if(mouseIsPressed && mouseX>700 && mouseX<=750 &&
     mouseY>height-50 && mouseY<height){
    c='darkblue'
  }
  fill('darkcyan')
  rect(750,height-50,50,50)
  if(mouseIsPressed && mouseX>750 && mouseX<=800 &&
     mouseY>height-50 && mouseY<height){
    c='antiquewhite'
  }
  fill('gold')
  rect(800,height-50,50,50)
  if(mouseIsPressed && mouseX>800 && mouseX<=850 &&
     mouseY>height-50 && mouseY<height){
    c='gold'
  }
  fill('lightsalmon')
  rect(850,height-50,50,50)
  if(mouseIsPressed && mouseX>850 && mouseX<=900 &&
     mouseY>height-50 && mouseY<height){
    c='antiquewhite'
  }
  fill('lightskyblue')
  rect(900,height-50,50,50)
  if(mouseIsPressed && mouseX>900 && mouseX<=950 &&
     mouseY>height-50 && mouseY<height){
    c='lightskyblue'
  }
  fill('black')
  rect(950,height-50,50,50)
  if(mouseIsPressed && mouseX>950 && mouseX<=1000 &&
     mouseY>height-50 && mouseY<height){
    c='black'
  }
  fill('white')
  stroke('black');
  strokeWeight(2);
  rect(1000,height-50,width-1000,50)
  if(mouseIsPressed && mouseX>1000 &&
     mouseY>height-50 && mouseY<height){
    c=255
  }
  noStroke();
  fill('black')
  textSize(20)
  text('eraser',1020,height-20)
  ellipse(13,38,25,25)
  dist1 = dist(mouseX,mouseY,13,38)
  if(dist1<12.5 && mouseIsPressed && cursorSize>=2){
    cursorSize-=0.5
  }
  ellipse(60,26,50,50)
  dist2 = dist(mouseX,mouseY,60,26)
  if(dist2<25 && mouseIsPressed && cursorSize<=100){
    cursorSize+=0.5
  }
  fill(c)
  stroke(2)
  rect(350,2,50,50)
  noStroke()
  fill(0)
  textSize(18)
  text('Current Colour:',220,31)
}
