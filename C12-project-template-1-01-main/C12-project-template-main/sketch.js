var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload() {
  // Carrega a imagem da pista (path.png)
  pathImg = loadImage("path.png");
  // Carrega a animação de corrida para o menino (Runner-1.png e Runner-2.png)
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  
  // Crie um sprite para a pista
  path = createSprite(200, 200);
  // Adicione a imagem da pista
  path.addImage(pathImg);
  // Faça com que a pista seja um fundo que se move dando a ela velocidade Y
  path.velocityY = 4;
  path.scale = 1.2;

  // Crie um sprite para o menino
  boy = createSprite(200, 300);
  // Adicione a animação de corrida para ele
  boy.addAnimation("running", boyImg);
  boy.scale = 0.08;
  
  // Crie limites invisíveis à esquerda e à direita
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  
  // Mova o menino com o mouse usando mouseX
  boy.x = mouseX;
  
  // Colida o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  // Código para redefinir o fundo
  if (path.y > 400) {
    path.y = height / 2;
  }
  
  drawSprites();
}