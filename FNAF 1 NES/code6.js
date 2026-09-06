gdjs.UdedCode = {};
gdjs.UdedCode.localVariables = [];
gdjs.UdedCode.GDGOObjects1= [];
gdjs.UdedCode.GDGOObjects2= [];


gdjs.UdedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "Start");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12390740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GO"), gdjs.UdedCode.GDGOObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.UdedCode.GDGOObjects1.length ;i < len;++i) {
    gdjs.UdedCode.GDGOObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Start");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12392188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titlescreen", false);
}}

}


};

gdjs.UdedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UdedCode.GDGOObjects1.length = 0;
gdjs.UdedCode.GDGOObjects2.length = 0;

gdjs.UdedCode.eventsList0(runtimeScene);
gdjs.UdedCode.GDGOObjects1.length = 0;
gdjs.UdedCode.GDGOObjects2.length = 0;


return;

}

gdjs['UdedCode'] = gdjs.UdedCode;
