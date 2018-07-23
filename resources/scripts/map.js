var Wall1Array = [];
var Wall2Array = [];
var Wall3Array = [];
var Wall4Array = [];
var EnemyArray = [];
var Wall5Var = "";
var mapIndex = 0;

var MAP = [
	[
		[1, 0, 1, 2, 2, 1, 5, 1, 2, 2, 1, 0, 1],
		[1, 7, 1, 3, 2, 1, 1, 1, 2, 3, 1, 7, 1],
		[1, 7, 2, 3, 2, 2, 1, 2, 2, 3, 2, 7, 1],
		[1, 7, 2, 3, 3, 3, 3, 3, 3, 3, 2, 7, 1],
		[1, 0, 2, 4, 4, 4, 2, 4, 4, 4, 2, 0, 1],
		[1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0],
		[0, 4, 2, 3, 2, 3, 2, 3, 2, 3, 2, 4, 0],
		[1, 4, 7, 3, 3, 4, 4, 1, 1, 1, 1, 4, 1],
		[0, 4, 3, 1, 3, 4, 2, 2, 3, 3, 3, 4, 0],
		[1, 4, 3, 3, 3, 4, 4, 2, 3, 1, 3, 4, 1],
		[0, 4, 1, 1, 1, 1, 2, 2, 3, 3, 7, 4, 0],
		[1, 4, 4, 3, 4, 3, 4, 3, 4, 3, 4, 4, 1],
		[0, 4, 0, 0, 0, 0, 6, 0, 0, 0, 0, 4, 0],
	],
	[
		[7, 0, 3, 7, 2, 1, 5, 1, 2, 7, 3, 0, 7],
		[0, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0],
		[0, 1, 3, 1, 2, 1, 1, 1, 2, 1, 3, 1, 0],
		[0, 1, 3, 1, 0, 2, 0, 2, 0, 1, 3, 1, 0],
		[0, 1, 3, 1, 0, 2, 2, 2, 0, 1, 3, 1, 0],
		[0, 3, 3, 3, 0, 2, 7, 2, 0, 3, 3, 3, 0],
		[1, 0, 4, 4, 4, 3, 3, 3, 4, 4, 4, 0, 1],
		[3, 3, 3, 4, 7, 3, 1, 3, 7, 4, 3, 3, 3],
		[3, 1, 3, 4, 0, 1, 3, 1, 0, 4, 3, 1, 3],
		[3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3],
		[3, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 3],
		[3, 3, 0, 1, 0, 1, 6, 1, 0, 1, 0, 3, 3]
	],
	[
		[1, 3, 0, 7, 3, 3, 2, 1, 1, 0, 5, 1, 1, 2, 3, 7, 3, 3, 3, 1],
		[3, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 4, 2, 3],
		[3, 7, 3, 1, 3, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 0, 4, 0, 0, 7],
		[3, 3, 1, 3, 3, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0, 3, 4, 3, 3],
		[7, 1, 3, 3, 3, 1, 4, 2, 4, 4, 4, 4, 2, 4, 1, 0, 3, 3, 4, 3],
		[3, 4, 4, 4, 0, 0, 3, 3, 3, 7, 3, 3, 7, 3, 3, 0, 1, 1, 1, 3],
		[3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 0, 2, 2, 2, 3, 0, 3, 3, 0, 0],
		[2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2],
		[7, 0, 7, 1, 3, 4, 3, 1, 3, 4, 1, 1, 3, 1, 4, 1, 1, 3, 0, 7],
		[0, 0, 0, 1, 3, 4, 1, 3, 1, 4, 1, 3, 1, 1, 4, 1, 1, 3, 0, 0],
		[0, 0, 0, 1, 3, 4, 1, 3, 1, 4, 1, 3, 3, 1, 4, 1, 3, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	[
		[7, 0, 0, 0, 0, 2, 5, 2, 0, 0, 7, 4, 7],
		[4, 4, 0, 4, 0, 2, 1, 2, 3, 4, 4, 4, 0],
		[4, 0, 0, 4, 3, 0, 0, 3, 3, 0, 1, 0, 0],
		[7, 0, 4, 4, 4, 1, 4, 0, 4, 4, 7, 4, 4],
		[4, 0, 4, 3, 3, 7, 4, 0, 7, 1, 0, 0, 1],
		[4, 0, 1, 3, 0, 4, 4, 4, 4, 3, 4, 4, 0],
		[4, 0, 0, 4, 0, 3, 0, 7, 1, 3, 1, 0, 0],
		[7, 0, 7, 4, 7, 0, 4, 4, 0, 4, 0, 4, 4],
		[3, 4, 4, 4, 4, 0, 4, 0, 0, 4, 7, 3, 3],
		[3, 3, 3, 1, 7, 0, 2, 0, 4, 4, 4, 4, 3],
		[4, 3, 4, 7, 4, 0, 7, 1, 0, 0, 1, 3, 3],
		[4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4],
		[7, 0, 0, 0, 4, 0, 6, 0, 0, 4, 0, 0, 7],
	],
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 7, 0, 0, 0, 0, 0, 4, 7, 0, 0, 0, 7, 4, 0, 0, 0, 0, 0, 7, 2],
		[2, 0, 0, 4, 1, 4, 0, 3, 3, 2, 0, 2, 3, 3, 0, 4, 1, 4, 0, 0, 2],
		[2, 4, 0, 1, 1, 1, 0, 3, 4, 2, 0, 2, 4, 3, 0, 1, 1, 1, 0, 4, 2],
		[2, 7, 0, 4, 1, 4, 0, 3, 7, 2, 4, 2, 7, 3, 0, 4, 1, 4, 0, 7, 2],
		[2, 4, 0, 0, 3, 1, 7, 3, 4, 2, 1, 2, 4, 3, 7, 1, 3, 0, 0, 4, 2],
		[2, 3, 3, 3, 3, 2, 0, 3, 3, 2, 5, 2, 3, 3, 0, 2, 3, 3, 3, 3, 2],
		[2, 7, 0, 0, 0, 3, 0, 4, 7, 2, 2, 2, 7, 4, 0, 3, 0, 0, 0, 7, 2],
		[2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
		[2, 7, 1, 0, 0, 3, 0, 0, 1, 4, 4, 4, 1, 0, 0, 3, 0, 0, 1, 7, 2],
		[2, 1, 0, 0, 7, 2, 0, 0, 7, 4, 7, 4, 7, 0, 0, 2, 7, 0, 0, 1, 2],
		[2, 1, 1, 3, 3, 3, 3, 3, 3, 4, 0, 4, 3, 3, 3, 3, 3, 3, 1, 1, 2],
		[2, 0, 1, 4, 4, 1, 4, 4, 1, 4, 0, 4, 1, 4, 4, 1, 4, 4, 1, 0, 2],
		[2, 1, 1, 4, 7, 0, 7, 4, 1, 4, 0, 4, 1, 4, 7, 0, 7, 4, 1, 1, 2],
		[2, 0, 1, 1, 0, 2, 0, 1, 1, 4, 0, 4, 1, 1, 0, 2, 0, 1, 1, 0, 2],
		[2, 4, 1, 4, 7, 0, 7, 4, 1, 4, 0, 4, 1, 4, 7, 0, 7, 4, 1, 4, 2],
		[2, 7, 1, 4, 4, 1, 4, 4, 1, 4, 0, 4, 1, 4, 4, 1, 4, 4, 1, 7, 2],
		[2, 0, 1, 7, 0, 0, 0, 7, 3, 4, 0, 4, 3, 7, 0, 0, 0, 7, 1, 0, 2],
		[2, 0, 1, 0, 0, 0, 0, 0, 3, 4, 7, 4, 3, 0, 0, 0, 0, 0, 1, 0, 2],
		[2, 0, 1, 0, 1, 0, 0, 0, 3, 4, 4, 4, 3, 0, 0, 0, 1, 0, 1, 0, 2],
		[2, 0, 1, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 1, 0, 2],
		[2, 0, 1, 0, 1, 7, 1, 0, 2, 2, 4, 2, 2, 0, 1, 7, 1, 0, 1, 0, 2],
		[2, 0, 0, 0, 1, 4, 1, 0, 0, 1, 0, 1, 0, 0, 1, 4, 1, 0, 0, 0, 2],
		[2, 0, 7, 0, 1, 7, 1, 0, 1, 2, 6, 2, 1, 0, 1, 7, 1, 0, 7, 0, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	]
];

function newMap()
{
	bgMusicPlay = true;
	player.lifeText.x = MAP[mapIndex][0].length * 32 - 125;
	SCENE.canvas.width = MAP[mapIndex][0].length * 32;
	SCENE.canvas.height = MAP[mapIndex].length * 32;
	deleteWalls(Wall1Array);
	deleteWalls(Wall2Array);
	deleteWalls(Wall3Array);
	deleteWalls(Wall4Array);
	deleteWalls(EnemyArray);
    createOuterWalls(OuterWallsArray);
	Wall5Var = "";
	for (y = 0; y < MAP[mapIndex].length; y++)
		for (x = 0; x < MAP[mapIndex][y].length; x++)
		{
			if(MAP[mapIndex][y][x] == 1) Wall1Array.push(new Wall1(x, y));
			if(MAP[mapIndex][y][x] == 2) Wall2Array.push(new Wall2(x, y));
			if(MAP[mapIndex][y][x] == 3) Wall3Array.push(new Wall3(x, y));
			if(MAP[mapIndex][y][x] == 4) Wall4Array.push(new Wall4(x, y));
			if(MAP[mapIndex][y][x] == 5) Wall5Var = new IMAGE(32, 32, "resources/sprites/wall5/1.png", x * 32, y * 32);
			if(MAP[mapIndex][y][x] == 5 && mapIndex == 2) Wall5Var.x = x * 32 - 16;
			if(MAP[mapIndex][y][x] == 6)
			{
				player.tank.x = x * 32;
				player.tank.y = y * 32;
			}
			if(MAP[mapIndex][y][x] == 7) EnemyArray.push(new Enemy(x, y));
		}
	mapIndex++;
}
function deleteWalls(x)
{
	for (i = 0; i < x.length; i++);
		x.splice(0, x.length);
}