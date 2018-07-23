SCENEKEYS();
SCENEMOUSEMOVE();

var startBool;
var bgMusic = new SOUND("resources/sounds/start.ogg");
var bgMusicPlay = true;
var boomMusic = new SOUND("resources/sounds/boom.ogg");
var boomMusicPlay = false;
var player = new Player();
var restartBool = true;
var OuterWallsArray = [];
var loseMusic = new SOUND("resources/sounds/lose.ogg");
var loseMusicPlay = true;
var loseMessage = new IMAGE(64, 32, "resources/sprites/gameover/1.png", 0, 0);
var loseMessageBool = true;
function starter()
{
	player.shot = "";
    createOuterWalls(OuterWallsArray);
	newMap();
}

function SCENEUPDATE()
{
	SCENE.CLEAR(); // Clear scene after frames
	if(bgMusicPlay)
	{
		bgMusic.play();
		bgMusicPlay = false;
	} // Play starter music
	if(boomMusicPlay)
	{
		boomMusic.play();
		boomMusicPlay = false;
	} // Play starter music
	player.tank.update();
	player.tank.newPos();
	speedX(player.tank, 0);
	speedY(player.tank, 0);
	OuterWallsUpdate(OuterWallsArray); // Update OuterWalls
	updateEnemy(EnemyArray); // Update Enemys
	for (i = 0; i < Wall1Array.length; i++)
	{
		Wall_1_Update(Wall1Array[i]);
		if(player.shot != "") Wall_1_Boom(player);
		for (j = 0; j < EnemyArray.length; j++)
			Wall_1_Boom(EnemyArray[j]);
		if(Wall1Array[i].a1 != "") WallCollider(Wall1Array[i].a1, player.tank);
		if(Wall1Array[i].a2 != "") WallCollider(Wall1Array[i].a2, player.tank);
		if(Wall1Array[i].b1 != "") WallCollider(Wall1Array[i].b1, player.tank);
		if(Wall1Array[i].b2 != "") WallCollider(Wall1Array[i].b2, player.tank);
		for (j = 0; j < EnemyArray.length; j++)
		{
			if(Wall1Array[i].a1 != "" && crash(Wall1Array[i].a1, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			if(Wall1Array[i].a2 != "" && crash(Wall1Array[i].a2, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			if(Wall1Array[i].b1 != "" && crash(Wall1Array[i].b1, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			if(Wall1Array[i].b2 != "" && crash(Wall1Array[i].b2, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			
			if(Wall1Array[i].a1 != "") WallCollider(Wall1Array[i].a1, EnemyArray[j].tank);
			if(Wall1Array[i].a2 != "") WallCollider(Wall1Array[i].a2, EnemyArray[j].tank);
			if(Wall1Array[i].b1 != "") WallCollider(Wall1Array[i].b1, EnemyArray[j].tank);
			if(Wall1Array[i].b2 != "") WallCollider(Wall1Array[i].b2, EnemyArray[j].tank);
			
			// WallCollider(EnemyArray[0].tank, outherwalls);
		}
	} // Update Wall1
	for (i = 0; i < Wall2Array.length; i++)
	{
		Wall_Update(Wall2Array[i]);
		WallCollider(Wall2Array[i].wall, player.tank);
		if(crash(player.shot, Wall2Array[i].wall)) player.shot = "";
		for (j = 0; j < EnemyArray.length; j++)
		{
			if(crash(Wall2Array[i].wall, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			WallCollider(Wall2Array[i].wall, EnemyArray[j].tank);
			if(crash(EnemyArray[j].shot, Wall2Array[i].wall)) EnemyArray[j].shot = "";
		}
	} // Update Wall2
	for (i = 0; i < Wall3Array.length; i++)
	{
		Wall_Update(Wall3Array[i]);
	} // Update Wall3
	for (i = 0; i < Wall4Array.length; i++)
	{
		Wall_Update(Wall4Array[i]);
		WallCollider(Wall4Array[i].wall, player.tank);
		for (j = 0; j < EnemyArray.length; j++)
		{
			if(crash(Wall4Array[i].wall, EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			WallCollider(Wall4Array[i].wall, EnemyArray[j].tank);
		}
	} // Update Wall4
	for (i = 0; i < EnemyArray.length; i++)
	{
		if(crash(EnemyArray[i].tank, player.shot))
		{
			EnemyArray.splice(i, 1);
			player.shot = "";
			boomMusicPlay = true;
		}
		if(EnemyArray[i] != undefined && crash(EnemyArray[i].shot, player.tank))
		{
			player.life--;
			player.lifeText.text = "Your Lifes: " + player.life;
			EnemyArray[i].shot = "";
			boomMusicPlay = true;
		}
	}
	if(crash(Wall5Var, player.shot))
	{
		if(mapIndex < MAP.length) newMap();
		else
		{
			WinCenter.style.display = "";
			document.getElementById("JSCSCENE").style.display = "none";
		}
	}
	if(Wall5Var != "") Wall5Var.update(); // Update Wall5
	player.lifeText.update();
	
	for (i = 0; i < OuterWallsArray.length; i++)
		for (j = 0; j < EnemyArray.length; j++)
		{
			if(crash(OuterWallsArray[i], EnemyArray[j].tank)) EnemyRandomDirection(EnemyArray[j]);
			WallCollider(OuterWallsArray[i], EnemyArray[j].tank);
		}
	
	if(player.shot != "") player.shot.update();
	if(player.shot != "") player.shot.newPos();
	
	if(keyDown(38))
	{
		imageSrc(player.tank, "resources/sprites/tank1/1.png");
		speedY(player.tank, -1);
		player.top();
	}
	if(keyDown(40))
	{
		imageSrc(player.tank, "resources/sprites/tank1/2.png");
		speedY(player.tank, 1);
		player.bottom();
	}
	if(keyDown(37))
	{
		imageSrc(player.tank, "resources/sprites/tank1/3.png");
		speedX(player.tank, -1);
		player.left();
	}
	if(keyDown(39))
	{
		imageSrc(player.tank, "resources/sprites/tank1/4.png");
		speedX(player.tank, 1);
		player.right();
	}
	if(keyDown(32) && player.canFire)
	{
		if(player.shotMusicBool)
		{
			player.shotMusic.play();
			player.shotMusicBool = false;
		}
		if(player.tank.image.src.charAt(player.tank.image.src.length - 5) == "1")
		{
			player.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", player.shot.x = player.tank.x + player.tank.width / 2 - player.shot.width / 2, player.shot.y = player.tank.y - player.shot.height);
			player.bulletDirection = "top";
		}
		if(player.tank.image.src.charAt(player.tank.image.src.length - 5) == "2")
		{
			player.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", player.shot.x = player.tank.x + player.tank.width / 2 - player.shot.width / 2, player.shot.y = player.tank.y + player.tank.height);
			player.bulletDirection = "bottom";
		}
		if(player.tank.image.src.charAt(player.tank.image.src.length - 5) == "3")
		{
			player.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", player.shot.x = player.tank.x - player.shot.width, player.shot.y = player.tank.y + player.tank.width / 2 - player.shot.width / 2);
			player.bulletDirection = "left";
		}
		if(player.tank.image.src.charAt(player.tank.image.src.length - 5) == "4")
		{
			player.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", player.shot.x = player.tank.x + player.tank.width, player.shot.y = player.tank.y + player.tank.width / 2 - player.shot.width / 2);
			player.bulletDirection = "right";
		}
	}
	if(player.shot != "") bulletAnimation();
	if(player.life < 0)
	{
		if(loseMessageBool)
		{
			loseMessage.x = MAP[mapIndex - 1][0].length * 16 - 32;
			loseMessage.y = MAP[mapIndex - 1].length * 32 - 32;
			LoseCenter.style.display = "";
			loseMessageBool = false;
		}
		loseMessage.update();
		loseMessage.y--;
		
		if(loseMusicPlay)
		{
			loseMusic.play();
			loseMusicPlay = false;
		}
		SCENEKeys = false;
	}
}
function bulletAnimation()
{
	if(player.bulletDirection == "top") player.shot.y -= 5;
	if(player.bulletDirection == "bottom") player.shot.y += 5;
	if(player.bulletDirection == "left") player.shot.x -= 5;
	if(player.bulletDirection == "right") player.shot.x += 5;
}

window.onkeydown = function()
{
	if(keyDown(32) && player.canFire)
	{
		player.canFire = false;
		setTimeout(function()
		{
			player.canFire = true;
		}, 1000);
	}
}

window.onkeyup = function()
{
	player.shotMusicBool = true;
}
setInterval(function()
{
	for (i = 0; i < EnemyArray.length; i++)
	{
		EnemyArray[i].shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", 0, 0);
		if(EnemyArray[i].direction == "top")
		{
			EnemyArray[i].shot.x = EnemyArray[i].tank.x + EnemyArray[i].tank.width / 2 - EnemyArray[i].shot.width / 2;
			EnemyArray[i].shot.y = EnemyArray[i].tank.y - EnemyArray[i].shot.height;
		}
			
		if(EnemyArray[i].direction == "bottom")
		{
			EnemyArray[i].shot.x = EnemyArray[i].tank.x + EnemyArray[i].tank.width / 2 - EnemyArray[i].shot.width / 2;
			EnemyArray[i].shot.y = EnemyArray[i].tank.y + EnemyArray[i].tank.height;
		}
			
		if(EnemyArray[i].direction == "left")
		{
			EnemyArray[i].shot.x = EnemyArray[i].tank.x - EnemyArray[i].shot.width;
			EnemyArray[i].shot.y = EnemyArray[i].tank.y + EnemyArray[i].tank.width / 2 - EnemyArray[i].shot.width / 2;
		}
			
		if(EnemyArray[i].direction == "right")
		{
			EnemyArray[i].shot.x = EnemyArray[i].tank.x + EnemyArray[i].tank.width;
			EnemyArray[i].shot.y = EnemyArray[i].tank.y + EnemyArray[i].tank.width / 2 - EnemyArray[i].shot.width / 2;
		}
		EnemyArray[i].bulletDirection = EnemyArray[i].direction;
	}
}, 1000);
var EnemyShotInterval = setInterval(function()
{
	for (i = 0; i < EnemyArray.length; i++)
	{
		if(EnemyArray[i].bulletDirection == "top") EnemyArray[i].shot.y -= 7.5;
		if(EnemyArray[i].bulletDirection == "bottom") EnemyArray[i].shot.y += 7.5;
		if(EnemyArray[i].bulletDirection == "left") EnemyArray[i].shot.x -= 7.5;
		if(EnemyArray[i].bulletDirection == "right") EnemyArray[i].shot.x += 7.5;
	}
}, 20);
