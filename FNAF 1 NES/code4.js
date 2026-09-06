gdjs.BeginninCode = {};
gdjs.BeginninCode.localVariables = [];
gdjs.BeginninCode.GDNewObjectObjects1= [];
gdjs.BeginninCode.GDNewObjectObjects2= [];


gdjs.BeginninCode.eventsList0 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.BeginninCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.BeginninCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.BeginninCode.GDNewObjectObjects1[i].setString("Night " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.BeginninCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.BeginninCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.BeginninCode.GDNewObjectObjects1[i].setString("Night 7");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "Start");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12374132);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.BeginninCode.GDNewObjectObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.BeginninCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.BeginninCode.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "Start");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12375532);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nights", false);
}}

}


};

gdjs.BeginninCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BeginninCode.GDNewObjectObjects1.length = 0;
gdjs.BeginninCode.GDNewObjectObjects2.length = 0;

gdjs.BeginninCode.eventsList0(runtimeScene);
gdjs.BeginninCode.GDNewObjectObjects1.length = 0;
gdjs.BeginninCode.GDNewObjectObjects2.length = 0;


return;

}

gdjs['BeginninCode'] = gdjs.BeginninCode;
