/* START */
var MCenter = document.createElement("center");
document.body.appendChild(MCenter);
var MImg = document.createElement("img");
MImg.style.marginTop = "150px";
MImg.setAttribute("src", "resources/BattleCity.png");
MCenter.appendChild(MImg);
MCenter.appendChild(document.createElement("br"));
var MButton = document.createElement("button");
MButton.appendChild(document.createTextNode("START!"));
MButton.style.backgroundColor = "ffffff";
MButton.style.fontSize = "16px";
MGameCenterTag = document.createElement("center");
MButton.onclick = function()
{
	// SCENE.CREATE(MAP[mapIndex][0].length * 32, MAP[mapIndex].length * 32, 'START');
	SCENE.CREATE(20 * 32, 12 * 32, 'START');
	MGameCenterTag.appendChild(SCENE.canvas);
	document.body.appendChild(MGameCenterTag);
	MCenter.style.display='none';
	starter();
}
MCenter.appendChild(MButton);

/* WIN */
var WinCenter = document.createElement("center");
var WinMessage = document.createElement("h1");
WinMessage.appendChild(document.createTextNode("You Win!"));
WinReplay = document.createElement("button");
WinReplay.appendChild(document.createTextNode("RePlay!"));
WinReplay.onclick = function()
{
	mapIndex = 0;
	newMap();
	WinCenter.style.display = "none";
	document.getElementById("JSCSCENE").style.display = "";
}
WinMessage.style.marginBottom = "0px";
WinCenter.appendChild(WinMessage);
WinCenter.appendChild(WinReplay);
document.body.appendChild(WinCenter);
WinCenter.style.display = "none";

/* LOSE */
LoseCenter = document.createElement("center");
LoseButton = document.createElement("button");
LoseButton.appendChild(document.createTextNode("RePlay!"));
LoseButton.onclick = function()
{
	location.reload();
}
LoseCenter.appendChild(LoseButton);
document.body.appendChild(LoseCenter);
LoseCenter.style.display = "none";