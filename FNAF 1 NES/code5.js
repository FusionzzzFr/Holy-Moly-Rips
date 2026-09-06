gdjs.UwonCode = {};
gdjs.UwonCode.localVariables = [];
gdjs.UwonCode.GDAMObjects1= [];
gdjs.UwonCode.GDAMObjects2= [];


gdjs.UwonCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12381636);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.UwonCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\ME\\UWON.ogg", false, 100, 0.85);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SW");
}
{ //Subevents
gdjs.UwonCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "SW");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12382428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AM"), gdjs.UwonCode.GDAMObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.UwonCode.GDAMObjects1.length ;i < len;++i) {
    gdjs.UwonCode.GDAMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "SW");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12384012);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titlescreen", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "SW");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 6;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 7;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12386308);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titlescreen", false);
}}

}


};

gdjs.UwonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UwonCode.GDAMObjects1.length = 0;
gdjs.UwonCode.GDAMObjects2.length = 0;

gdjs.UwonCode.eventsList1(runtimeScene);
gdjs.UwonCode.GDAMObjects1.length = 0;
gdjs.UwonCode.GDAMObjects2.length = 0;


return;

}

gdjs['UwonCode'] = gdjs.UwonCode;
