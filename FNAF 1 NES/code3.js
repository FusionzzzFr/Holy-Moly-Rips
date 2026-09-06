gdjs.BlackoutCode = {};
gdjs.BlackoutCode.localVariables = [];
gdjs.BlackoutCode.GDJumpscareObjects2_1final = [];

gdjs.BlackoutCode.GDOfficeObjects1= [];
gdjs.BlackoutCode.GDOfficeObjects2= [];
gdjs.BlackoutCode.GDOfficeObjects3= [];
gdjs.BlackoutCode.GDJumpscareObjects1= [];
gdjs.BlackoutCode.GDJumpscareObjects2= [];
gdjs.BlackoutCode.GDJumpscareObjects3= [];
gdjs.BlackoutCode.GDFreddyObjects1= [];
gdjs.BlackoutCode.GDFreddyObjects2= [];
gdjs.BlackoutCode.GDFreddyObjects3= [];


gdjs.BlackoutCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fuck");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "Fuck");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\ME\\CarmenPulseSquare.ogg", 1, false, 100, 1);
}}

}


};gdjs.BlackoutCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Freddy"), gdjs.BlackoutCode.GDFreddyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AM");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fuck");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "GameOver");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Fuck");
}{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BlackoutCode.GDFreddyObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDFreddyObjects2[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Freddy"), gdjs.BlackoutCode.GDFreddyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Office"), gdjs.BlackoutCode.GDOfficeObjects2);
{for(var i = 0, len = gdjs.BlackoutCode.GDFreddyObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDFreddyObjects2[i].setX((( gdjs.BlackoutCode.GDOfficeObjects2.length === 0 ) ? 0 :gdjs.BlackoutCode.GDOfficeObjects2[0].getPointX("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Office"), gdjs.BlackoutCode.GDOfficeObjects2);
{for(var i = 0, len = gdjs.BlackoutCode.GDOfficeObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDOfficeObjects2[i].setX(-(108));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == -(1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Office"), gdjs.BlackoutCode.GDOfficeObjects2);
{for(var i = 0, len = gdjs.BlackoutCode.GDOfficeObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDOfficeObjects2[i].setX(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "AM");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11424308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].returnVariable(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].returnVariable(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AM");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects2.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(1)) > 2 ) {
        isConditionTrue_0 = true;
        gdjs.BlackoutCode.GDJumpscareObjects2[k] = gdjs.BlackoutCode.GDJumpscareObjects2[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.BlackoutCode.GDJumpscareObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2, gdjs.BlackoutCode.GDJumpscareObjects3);

for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects3.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.BlackoutCode.GDJumpscareObjects3[k] = gdjs.BlackoutCode.GDJumpscareObjects3[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BlackoutCode.GDJumpscareObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BlackoutCode.GDJumpscareObjects2_1final.indexOf(gdjs.BlackoutCode.GDJumpscareObjects3[j]) === -1 )
            gdjs.BlackoutCode.GDJumpscareObjects2_1final.push(gdjs.BlackoutCode.GDJumpscareObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2, gdjs.BlackoutCode.GDJumpscareObjects3);

for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects3.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariables().getFromIndex(1)) >= 25 ) {
        isConditionTrue_1 = true;
        gdjs.BlackoutCode.GDJumpscareObjects3[k] = gdjs.BlackoutCode.GDJumpscareObjects3[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BlackoutCode.GDJumpscareObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BlackoutCode.GDJumpscareObjects2_1final.indexOf(gdjs.BlackoutCode.GDJumpscareObjects3[j]) === -1 )
            gdjs.BlackoutCode.GDJumpscareObjects2_1final.push(gdjs.BlackoutCode.GDJumpscareObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2_1final, gdjs.BlackoutCode.GDJumpscareObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11426700);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Freddy"), gdjs.BlackoutCode.GDFreddyObjects2);
/* Reuse gdjs.BlackoutCode.GDJumpscareObjects2 */
{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].setVariableBoolean(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(2), true);
}
}{for(var i = 0, len = gdjs.BlackoutCode.GDFreddyObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDFreddyObjects2[i].hide(false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\SE\\FreddyLaugh.ogg", 2, false, 5, 1);
}
{ //Subevents
gdjs.BlackoutCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects2.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariableBoolean(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(2), true) ) {
        isConditionTrue_0 = true;
        gdjs.BlackoutCode.GDJumpscareObjects2[k] = gdjs.BlackoutCode.GDJumpscareObjects2[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11429508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BlackoutCode.GDJumpscareObjects2 */
{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].returnVariable(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26, "Fuck");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Freddy"), gdjs.BlackoutCode.GDFreddyObjects2);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.BlackoutCode.GDFreddyObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDFreddyObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects2.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BlackoutCode.GDJumpscareObjects2[k] = gdjs.BlackoutCode.GDJumpscareObjects2[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.BlackoutCode.GDJumpscareObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects2.length;i<l;++i) {
    if ( !(gdjs.BlackoutCode.GDJumpscareObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.BlackoutCode.GDJumpscareObjects2[k] = gdjs.BlackoutCode.GDJumpscareObjects2[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects2.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects2[i].getVariables().getFromIndex(1)) > 27 ) {
        isConditionTrue_0 = true;
        gdjs.BlackoutCode.GDJumpscareObjects2[k] = gdjs.BlackoutCode.GDJumpscareObjects2[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.BlackoutCode.GDJumpscareObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2, gdjs.BlackoutCode.GDJumpscareObjects3);

for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects3.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.BlackoutCode.GDJumpscareObjects3[k] = gdjs.BlackoutCode.GDJumpscareObjects3[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BlackoutCode.GDJumpscareObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BlackoutCode.GDJumpscareObjects2_1final.indexOf(gdjs.BlackoutCode.GDJumpscareObjects3[j]) === -1 )
            gdjs.BlackoutCode.GDJumpscareObjects2_1final.push(gdjs.BlackoutCode.GDJumpscareObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2, gdjs.BlackoutCode.GDJumpscareObjects3);

for (var i = 0, k = 0, l = gdjs.BlackoutCode.GDJumpscareObjects3.length;i<l;++i) {
    if ( gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariableNumber(gdjs.BlackoutCode.GDJumpscareObjects3[i].getVariables().getFromIndex(1)) >= 50 ) {
        isConditionTrue_1 = true;
        gdjs.BlackoutCode.GDJumpscareObjects3[k] = gdjs.BlackoutCode.GDJumpscareObjects3[i];
        ++k;
    }
}
gdjs.BlackoutCode.GDJumpscareObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BlackoutCode.GDJumpscareObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BlackoutCode.GDJumpscareObjects2_1final.indexOf(gdjs.BlackoutCode.GDJumpscareObjects3[j]) === -1 )
            gdjs.BlackoutCode.GDJumpscareObjects2_1final.push(gdjs.BlackoutCode.GDJumpscareObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BlackoutCode.GDJumpscareObjects2_1final, gdjs.BlackoutCode.GDJumpscareObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11431884);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BlackoutCode.GDJumpscareObjects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.BlackoutCode.GDJumpscareObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDJumpscareObjects2[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\JumpscareLouder.ogg", false, 250, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "GameOver");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 89;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11403956);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(12);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 13;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.BlackoutCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 89, "AM");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11398092);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AM");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(12);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 13;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


};gdjs.BlackoutCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12355068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Office"), gdjs.BlackoutCode.GDOfficeObjects2);
{for(var i = 0, len = gdjs.BlackoutCode.GDOfficeObjects2.length ;i < len;++i) {
    gdjs.BlackoutCode.GDOfficeObjects2[i].getBehavior("Tween").addObjectPositionXTween("Left", 0, "linear", 1000, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12357732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Office"), gdjs.BlackoutCode.GDOfficeObjects1);
{for(var i = 0, len = gdjs.BlackoutCode.GDOfficeObjects1.length ;i < len;++i) {
    gdjs.BlackoutCode.GDOfficeObjects1[i].getBehavior("Tween").addObjectPositionXTween("Right", -(108), "linear", 1000, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.BlackoutCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "GameOver");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\SE\\NightNoise2.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Uded", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Uwon", false);
}}

}


};gdjs.BlackoutCode.eventsList5 = function(runtimeScene) {

{


gdjs.BlackoutCode.eventsList1(runtimeScene);
}


{


gdjs.BlackoutCode.eventsList2(runtimeScene);
}


{


gdjs.BlackoutCode.eventsList3(runtimeScene);
}


{


gdjs.BlackoutCode.eventsList4(runtimeScene);
}


};

gdjs.BlackoutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BlackoutCode.GDOfficeObjects1.length = 0;
gdjs.BlackoutCode.GDOfficeObjects2.length = 0;
gdjs.BlackoutCode.GDOfficeObjects3.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects1.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects2.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects3.length = 0;
gdjs.BlackoutCode.GDFreddyObjects1.length = 0;
gdjs.BlackoutCode.GDFreddyObjects2.length = 0;
gdjs.BlackoutCode.GDFreddyObjects3.length = 0;

gdjs.BlackoutCode.eventsList5(runtimeScene);
gdjs.BlackoutCode.GDOfficeObjects1.length = 0;
gdjs.BlackoutCode.GDOfficeObjects2.length = 0;
gdjs.BlackoutCode.GDOfficeObjects3.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects1.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects2.length = 0;
gdjs.BlackoutCode.GDJumpscareObjects3.length = 0;
gdjs.BlackoutCode.GDFreddyObjects1.length = 0;
gdjs.BlackoutCode.GDFreddyObjects2.length = 0;
gdjs.BlackoutCode.GDFreddyObjects3.length = 0;


return;

}

gdjs['BlackoutCode'] = gdjs.BlackoutCode;
