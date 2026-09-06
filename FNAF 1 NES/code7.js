gdjs.CustomNightLevelsCode = {};
gdjs.CustomNightLevelsCode.localVariables = [];
gdjs.CustomNightLevelsCode.GDAiSelectObjects1= [];
gdjs.CustomNightLevelsCode.GDAiSelectObjects2= [];
gdjs.CustomNightLevelsCode.GDAiSelectObjects3= [];
gdjs.CustomNightLevelsCode.GDAiSelectObjects4= [];
gdjs.CustomNightLevelsCode.GDFreddyAIObjects1= [];
gdjs.CustomNightLevelsCode.GDFreddyAIObjects2= [];
gdjs.CustomNightLevelsCode.GDFreddyAIObjects3= [];
gdjs.CustomNightLevelsCode.GDFreddyAIObjects4= [];
gdjs.CustomNightLevelsCode.GDBonnieAIObjects1= [];
gdjs.CustomNightLevelsCode.GDBonnieAIObjects2= [];
gdjs.CustomNightLevelsCode.GDBonnieAIObjects3= [];
gdjs.CustomNightLevelsCode.GDBonnieAIObjects4= [];
gdjs.CustomNightLevelsCode.GDChicaAIObjects1= [];
gdjs.CustomNightLevelsCode.GDChicaAIObjects2= [];
gdjs.CustomNightLevelsCode.GDChicaAIObjects3= [];
gdjs.CustomNightLevelsCode.GDChicaAIObjects4= [];
gdjs.CustomNightLevelsCode.GDFoxyAIObjects1= [];
gdjs.CustomNightLevelsCode.GDFoxyAIObjects2= [];
gdjs.CustomNightLevelsCode.GDFoxyAIObjects3= [];
gdjs.CustomNightLevelsCode.GDFoxyAIObjects4= [];
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1= [];
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2= [];
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects3= [];
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects4= [];


gdjs.CustomNightLevelsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoldenFreddy"), gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BonnieAI"), gdjs.CustomNightLevelsCode.GDBonnieAIObjects2);
gdjs.copyArray(runtimeScene.getObjects("ChicaAI"), gdjs.CustomNightLevelsCode.GDChicaAIObjects2);
gdjs.copyArray(runtimeScene.getObjects("FoxyAI"), gdjs.CustomNightLevelsCode.GDFoxyAIObjects2);
gdjs.copyArray(runtimeScene.getObjects("FreddyAI"), gdjs.CustomNightLevelsCode.GDFreddyAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFreddyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFreddyAIObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDBonnieAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDBonnieAIObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))));
}
}{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDChicaAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDChicaAIObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))));
}
}{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFoxyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFoxyAIObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12443188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12446012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12448036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").getAnimationIndex() - (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FreddyAI"), gdjs.CustomNightLevelsCode.GDFreddyAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFreddyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFreddyAIObjects2[i].setX(27);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonnieAI"), gdjs.CustomNightLevelsCode.GDBonnieAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDBonnieAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDBonnieAIObjects2[i].setX(83);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ChicaAI"), gdjs.CustomNightLevelsCode.GDChicaAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDChicaAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDChicaAIObjects2[i].setX(142);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) > 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FoxyAI"), gdjs.CustomNightLevelsCode.GDFoxyAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFoxyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFoxyAIObjects2[i].setX(198);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FreddyAI"), gdjs.CustomNightLevelsCode.GDFreddyAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFreddyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFreddyAIObjects2[i].setX(34);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonnieAI"), gdjs.CustomNightLevelsCode.GDBonnieAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDBonnieAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDBonnieAIObjects2[i].setX(90);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ChicaAI"), gdjs.CustomNightLevelsCode.GDChicaAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDChicaAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDChicaAIObjects2[i].setX(149);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FoxyAI"), gdjs.CustomNightLevelsCode.GDFoxyAIObjects2);
{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDFoxyAIObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDFoxyAIObjects2[i].setX(206);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 20;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 20;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > 20;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) > 20;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(20);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(20);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(20);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(20);
}}

}


};gdjs.CustomNightLevelsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12460452);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12462092);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}}

}


};gdjs.CustomNightLevelsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12464348);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12465988);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}}

}


};gdjs.CustomNightLevelsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12468268);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12469908);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}}

}


};gdjs.CustomNightLevelsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12472180);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12473820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).sub(1);
}}

}


};gdjs.CustomNightLevelsCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length;i<l;++i) {
    if ( gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CustomNightLevelsCode.GDAiSelectObjects2[k] = gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i];
        ++k;
    }
}
gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length;i<l;++i) {
    if ( gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.CustomNightLevelsCode.GDAiSelectObjects2[k] = gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i];
        ++k;
    }
}
gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length;i<l;++i) {
    if ( gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.CustomNightLevelsCode.GDAiSelectObjects2[k] = gdjs.CustomNightLevelsCode.GDAiSelectObjects2[i];
        ++k;
    }
}
gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AiSelect"), gdjs.CustomNightLevelsCode.GDAiSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CustomNightLevelsCode.GDAiSelectObjects1.length;i<l;++i) {
    if ( gdjs.CustomNightLevelsCode.GDAiSelectObjects1[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.CustomNightLevelsCode.GDAiSelectObjects1[k] = gdjs.CustomNightLevelsCode.GDAiSelectObjects1[i];
        ++k;
    }
}
gdjs.CustomNightLevelsCode.GDAiSelectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.CustomNightLevelsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoldenFreddy"), gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1.length;i<l;++i) {
    if ( !(gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1[k] = gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1[i];
        ++k;
    }
}
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.CustomNightLevelsCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12472988);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginnin", false);
}}

}


};gdjs.CustomNightLevelsCode.asyncCallback12444492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CustomNightLevelsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titlescreen", false);
}gdjs.CustomNightLevelsCode.localVariables.length = 0;
}
gdjs.CustomNightLevelsCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.CustomNightLevelsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CustomNightLevelsCode.asyncCallback12444492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CustomNightLevelsCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12440676);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoldenFreddy"), gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\SE\\JumpscareLouder.ogg", 1, false, 100, 0.8);
}{for(var i = 0, len = gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2.length ;i < len;++i) {
    gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.CustomNightLevelsCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.CustomNightLevelsCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) != 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 9;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) != 8;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) != 7;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 9;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 8;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 7;
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.CustomNightLevelsCode.asyncCallback12474620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CustomNightLevelsCode.localVariables);

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CustomNightLevelsCode.localVariables.length = 0;
}
gdjs.CustomNightLevelsCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CustomNightLevelsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CustomNightLevelsCode.asyncCallback12474620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CustomNightLevelsCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.CustomNightLevelsCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.CustomNightLevelsCode.eventsList13 = function(runtimeScene) {

{


gdjs.CustomNightLevelsCode.eventsList0(runtimeScene);
}


{


gdjs.CustomNightLevelsCode.eventsList6(runtimeScene);
}


{


gdjs.CustomNightLevelsCode.eventsList12(runtimeScene);
}


};

gdjs.CustomNightLevelsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CustomNightLevelsCode.GDAiSelectObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects4.length = 0;

gdjs.CustomNightLevelsCode.eventsList13(runtimeScene);
gdjs.CustomNightLevelsCode.GDAiSelectObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDAiSelectObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDFreddyAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDBonnieAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDChicaAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDFoxyAIObjects4.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects1.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects2.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects3.length = 0;
gdjs.CustomNightLevelsCode.GDGoldenFreddyObjects4.length = 0;


return;

}

gdjs['CustomNightLevelsCode'] = gdjs.CustomNightLevelsCode;
