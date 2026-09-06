gdjs.TitlescreenCode = {};
gdjs.TitlescreenCode.localVariables = [];
gdjs.TitlescreenCode.GDBGObjects1= [];
gdjs.TitlescreenCode.GDBGObjects2= [];
gdjs.TitlescreenCode.GDBGObjects3= [];
gdjs.TitlescreenCode.GDButtongzObjects1= [];
gdjs.TitlescreenCode.GDButtongzObjects2= [];
gdjs.TitlescreenCode.GDButtongzObjects3= [];
gdjs.TitlescreenCode.GDNightTeggzdObjects1= [];
gdjs.TitlescreenCode.GDNightTeggzdObjects2= [];
gdjs.TitlescreenCode.GDNightTeggzdObjects3= [];
gdjs.TitlescreenCode.GDCreditsObjects1= [];
gdjs.TitlescreenCode.GDCreditsObjects2= [];
gdjs.TitlescreenCode.GDCreditsObjects3= [];


gdjs.TitlescreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].returnVariable(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.TitlescreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NightTeggzd"), gdjs.TitlescreenCode.GDNightTeggzdObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDNightTeggzdObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDNightTeggzdObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitlescreenCode.GDCreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("NightTeggzd"), gdjs.TitlescreenCode.GDNightTeggzdObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDNightTeggzdObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDNightTeggzdObjects2[i].setString("Night " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.TitlescreenCode.GDCreditsObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDCreditsObjects2[i].pauseAnimation();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\BGS\\Title.ogg", true, 50, 1);
}
{ //Subevents
gdjs.TitlescreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects1.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects1[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects1[i].getVariables().getFromIndex(0)) != 1 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects1[k] = gdjs.TitlescreenCode.GDButtongzObjects1[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NightTeggzd"), gdjs.TitlescreenCode.GDNightTeggzdObjects1);
{for(var i = 0, len = gdjs.TitlescreenCode.GDNightTeggzdObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDNightTeggzdObjects1[i].hide();
}
}}

}


};gdjs.TitlescreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) > 3 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitlescreenCode.GDButtongzObjects2 */
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].returnVariable(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitlescreenCode.GDButtongzObjects2 */
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].returnVariable(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11246924);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].returnVariable(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11249628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);
{for(var i = 0, len = gdjs.TitlescreenCode.GDButtongzObjects2.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDButtongzObjects2[i].returnVariable(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.TitlescreenCode.GDBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDBGObjects1[i].getAnimation() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDBGObjects1[k] = gdjs.TitlescreenCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11251708);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitlescreenCode.GDBGObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitlescreenCode.GDCreditsObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{for(var i = 0, len = gdjs.TitlescreenCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDCreditsObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.TitlescreenCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDCreditsObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.TitlescreenCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDBGObjects1[i].setAnimation(0);
}
}}

}


};gdjs.TitlescreenCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11254564);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How2play", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11257228);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginnin", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects2.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects2[k] = gdjs.TitlescreenCode.GDButtongzObjects2[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11259676);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CustomNightLevels", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttongz"), gdjs.TitlescreenCode.GDButtongzObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitlescreenCode.GDButtongzObjects1.length;i<l;++i) {
    if ( gdjs.TitlescreenCode.GDButtongzObjects1[i].getVariableNumber(gdjs.TitlescreenCode.GDButtongzObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.TitlescreenCode.GDButtongzObjects1[k] = gdjs.TitlescreenCode.GDButtongzObjects1[i];
        ++k;
    }
}
gdjs.TitlescreenCode.GDButtongzObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11262748);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.TitlescreenCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitlescreenCode.GDCreditsObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\Miss.ogg", false, 50, 1);
}{for(var i = 0, len = gdjs.TitlescreenCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDBGObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TitlescreenCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.TitlescreenCode.GDCreditsObjects1[i].playAnimation();
}
}}

}


};gdjs.TitlescreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.TitlescreenCode.eventsList1(runtimeScene);
}


{


gdjs.TitlescreenCode.eventsList2(runtimeScene);
}


{


gdjs.TitlescreenCode.eventsList3(runtimeScene);
}


};

gdjs.TitlescreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitlescreenCode.GDBGObjects1.length = 0;
gdjs.TitlescreenCode.GDBGObjects2.length = 0;
gdjs.TitlescreenCode.GDBGObjects3.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects1.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects2.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects3.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects1.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects2.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects3.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects1.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects2.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects3.length = 0;

gdjs.TitlescreenCode.eventsList4(runtimeScene);
gdjs.TitlescreenCode.GDBGObjects1.length = 0;
gdjs.TitlescreenCode.GDBGObjects2.length = 0;
gdjs.TitlescreenCode.GDBGObjects3.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects1.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects2.length = 0;
gdjs.TitlescreenCode.GDButtongzObjects3.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects1.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects2.length = 0;
gdjs.TitlescreenCode.GDNightTeggzdObjects3.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects1.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects2.length = 0;
gdjs.TitlescreenCode.GDCreditsObjects3.length = 0;


return;

}

gdjs['TitlescreenCode'] = gdjs.TitlescreenCode;
