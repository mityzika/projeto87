
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	 enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // adicione os códigos adequados às teclas
	{
		 ranger escarlate

		 new_image('rr1.png');
		 console.log("r");

	}
	if(keyPressed == '86')
	{
		blockX = 200;
		 ranger verde

		 new_image('rr1.png');
		 console.log("r");
		 
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		 ranger amarelo

		 new_image('rr.png');
		 console.log("rr");
		 
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		ranger rosa

		new_image('gr.png');
		console.log("gr");
		
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	 ranger índigo

	new_image('pr.png');
	console.log("pr");
	
	}
	
	{
		var canvas=new fabric.Canvas("myCanvas");
	}
	
}

