gdjs.How2playCode = {};
gdjs.How2playCode.localVariables = [];
gdjs.How2playCode.GDh2pObjects1= [];
gdjs.How2playCode.GDh2pObjects2= [];


gdjs.How2playCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("h2p"), gdjs.How2playCode.GDh2pObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How2playCode.GDh2pObjects1.length;i<l;++i) {
    if ( gdjs.How2playCode.GDh2pObjects1[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.How2playCode.GDh2pObjects1[k] = gdjs.How2playCode.GDh2pObjects1[i];
        ++k;
    }
}
gdjs.How2playCode.GDh2pObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14129876);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginnin", false);
}}

}


};

gdjs.How2playCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How2playCode.GDh2pObjects1.length = 0;
gdjs.How2playCode.GDh2pObjects2.length = 0;

gdjs.How2playCode.eventsList0(runtimeScene);
gdjs.How2playCode.GDh2pObjects1.length = 0;
gdjs.How2playCode.GDh2pObjects2.length = 0;


return;

}

gdjs['How2playCode'] = gdjs.How2playCode;
