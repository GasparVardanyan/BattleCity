function Player()
{
	this.direction = "top";
	this.bulletDirection = "top";
	this.canFire = true;
	this.top = function()
	{
		this.direction = "top";
	}
	this.bottom = function()
	{
		this.direction = "bottom";
	}
	this.left = function()
	{
		this.direction = "left";
	}
	this.right = function()
	{
		this.direction = "right";
	}
	this.tank = new IMAGE(25, 25, "resources/sprites/tank1/1.png", 0, 0);
	this.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", 0, 0);
	this.shotMusic = new SOUND("resources/sounds/shot.ogg");
	this.shotMusicBool = true;
	this.life = 30;
	this.lifeText = new TEXT("15px", "Consolas", "#ffffff", SCENEw(), 10, "Your Lifes: " + this.life);
	this.shotCrash = false;
}
function crash(a, o)
{
	this.ahc = a.x + a.width / 2;
	this.avc = a.y + a.height / 2;
	this.ohc = o.x + o.width / 2;
	this.ovc = o.y + o.height / 2;
	this.vs = a.width / 2 + o.width / 2;
	this.hs = a.height / 2 + o.height / 2;
	if (Math.abs(this.ahc - this.ohc) <= vs && Math.abs(this.avc - this.ovc) <= hs) return true;
	else return false;
}
function Enemy(x, y)
{
	this.direction = "bottom";
	this.bulletDirection = "top";
	this.newDirectionBool = true;
	this.top = function()
	{
		this.direction = "top";
	}
	this.bottom = function()
	{
		this.direction = "bottom";
	}
	this.left = function()
	{
		this.direction = "left";
	}
	this.right = function()
	{
		this.direction = "right";
	}
	this.tank = new IMAGE(25, 25, "resources/sprites/tank4/1.png", x * 32, y * 32);
	this.shot = new IMAGE(5, 5, "resources/sprites/shot/1.png", 0, 0);
	this.shotMusic = new SOUND("resources/sounds/shot.ogg");
	this.shotMusicBool = true;
	this.shotDynamic = false;
	this.fired = false;
	this.life = 5;
	this.shotCrash = false;
}
function updateEnemy(enemyarray)
{
	for (i = 0; i < enemyarray.length; i++)
	{
		enemyarray[i].tank.update();
		if(enemyarray[i].shot != "") enemyarray[i].shot.update();
		if(enemyarray[i].direction == "top")
		{
			imageSrc(enemyarray[i].tank, "resources/sprites/tank4/1.png");
			enemyarray[i].tank.y--;
		}
		if(enemyarray[i].direction == "bottom")
		{
			imageSrc(enemyarray[i].tank, "resources/sprites/tank4/2.png");
			enemyarray[i].tank.y++;
		}
		if(enemyarray[i].direction == "left")
		{
			imageSrc(enemyarray[i].tank, "resources/sprites/tank4/3.png");
			enemyarray[i].tank.x--;
		}
		if(enemyarray[i].direction == "right")
		{
			imageSrc(enemyarray[i].tank, "resources/sprites/tank4/4.png");
			enemyarray[i].tank.x++;
		}
	}
}
function EnemyRandomDirection(enemyvar)
{
	num = fRandomFT(0, 3);
	if(num == 0) enemyvar.direction = "top";
	if(num == 1) enemyvar.direction = "bottom";
	if(num == 2) enemyvar.direction = "left";
	if(num == 3) enemyvar.direction = "right";
}