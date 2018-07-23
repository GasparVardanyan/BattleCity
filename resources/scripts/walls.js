function Wall1(x, y)
{
	this.a1 = new IMAGE(16, 16, "resources/sprites/wall1/1.png", x * 32, y * 32);
	this.a2 = new IMAGE(16, 16, "resources/sprites/wall1/1.png", x * 32 + 16, y * 32);
	this.b1 = new IMAGE(16, 16, "resources/sprites/wall1/1.png", x * 32, y * 32 + 16);
	this.b2 = new IMAGE(16, 16, "resources/sprites/wall1/1.png", x * 32 + 16, y * 32 + 16);
}
function Wall2(x, y)
{
	this.wall = new IMAGE(32, 32, "resources/sprites/wall2/1.png", x * 32, y * 32);
}
function Wall3(x, y)
{
	this.wall = new IMAGE(32, 32, "resources/sprites/wall3/1.png", x * 32, y * 32);
}
function Wall4(x, y)
{
	this.wall = new IMAGE(32, 32, "resources/sprites/wall4/1.png", x * 32, y * 32);
	Wall_4_Animation(this);
}
function Wall_1_Update(x)
{
	if(x.a1 != "") x.a1.update();
	if(x.a2 != "") x.a2.update();
	if(x.b1 != "") x.b1.update();
	if(x.b2 != "") x.b2.update();
}
function Wall_1_Boom(customtank)
{
	if(Wall1Array[i].a1 != "" && crash(customtank.shot, Wall1Array[i].a1))
	{
		Wall1Array[i].a1 = "";
		customtank.shot = "";
		map = "";
		if(customtank.direction == "top" || customtank.direction == "bottom")
			Wall1Array[i].a2 = "";
		if(customtank.direction == "left" || customtank.direction == "right")
			Wall1Array[i].b1 = "";
	}
	if(Wall1Array[i].a2 != "" && crash(customtank.shot, Wall1Array[i].a2))
	{
		Wall1Array[i].a2 = "";
		customtank.shot = "";
		if(customtank.direction == "top" || customtank.direction == "bottom")
			Wall1Array[i].a1 = "";
		if(customtank.direction == "left" || customtank.direction == "right")
			Wall1Array[i].b2 = "";
	}
	if(Wall1Array[i].b1 != "" && crash(customtank.shot, Wall1Array[i].b1))
	{
		Wall1Array[i].b1 = "";
		customtank.shot = "";
		if(customtank.direction == "top" || customtank.direction == "bottom")
			Wall1Array[i].b2 = "";
		if(customtank.direction == "left" || customtank.direction == "right")
			Wall1Array[i].a1 = "";
	}
	if(Wall1Array[i].b2 != "" && crash(customtank.shot, Wall1Array[i].b2))
	{
		Wall1Array[i].b2 = "";
		customtank.shot = "";
		if(customtank.direction == "top" || customtank.direction == "bottom")
			Wall1Array[i].b1 = "";
		if(customtank.direction == "left" || customtank.direction == "right")
			Wall1Array[i].a2 = "";
	}
}
function Wall_Update(x)
{
	x.wall.update();
}
function Wall_4_Animation(x)
{
	setInterval(function()
	{
		x.wall.image.src = "resources/sprites/wall4/1.png";
	}, 2000);
	setTimeout(function()
	{
		setInterval(function()
		{
			x.wall.image.src = "resources/sprites/wall4/2.png";
		}, 2000);
	}, 1000);
}
function WallCollider(wall, other)
{
	if(other.crashWith(wall) && other.y == wall.y - other.height) other.y--;
	if(other.crashWith(wall) && other.x == wall.x - other.width) other.x--;
	if(wall.crashWith(other) && wall.y == other.y - wall.height) other.y++;
	if(wall.crashWith(other) && wall.x == other.x - wall.width) other.x++;
}

function createOuterWalls(x)
{
	deleteWalls(x);
	x.push(
		new SQUARE(MAP[mapIndex].length * 320, 1, "#000000", 0, 0),
		new SQUARE(1, MAP[mapIndex].length * 320, "#000000", 0, 0),
		new SQUARE(MAP[mapIndex][0].length * 320, 1, "#000000", 0, MAP[mapIndex].length * 32 - 1),
		new SQUARE(1, MAP[mapIndex].length * 320, "#000000", MAP[mapIndex][0].length * 32 - 1, 0)
	);
}
function OuterWallsUpdate(x)
{
	for (i = 0; i < x.length; i++)
		x[i].update();
}