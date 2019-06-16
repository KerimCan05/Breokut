gdjs.PongCode = {};
gdjs.PongCode.GDballeObjects1_1final = [];

gdjs.PongCode.GDbrickObjects1_1final = [];

gdjs.PongCode.forEachIndex3 = 0;

gdjs.PongCode.forEachObjects3 = [];

gdjs.PongCode.forEachTemporary3 = null;

gdjs.PongCode.forEachTotalCount3 = 0;

gdjs.PongCode.GDterrainObjects1= [];
gdjs.PongCode.GDterrainObjects2= [];
gdjs.PongCode.GDterrainObjects3= [];
gdjs.PongCode.GDbarreObjects1= [];
gdjs.PongCode.GDbarreObjects2= [];
gdjs.PongCode.GDbarreObjects3= [];
gdjs.PongCode.GDballeObjects1= [];
gdjs.PongCode.GDballeObjects2= [];
gdjs.PongCode.GDballeObjects3= [];
gdjs.PongCode.GDbrickObjects1= [];
gdjs.PongCode.GDbrickObjects2= [];
gdjs.PongCode.GDbrickObjects3= [];

gdjs.PongCode.conditionTrue_0 = {val:false};
gdjs.PongCode.condition0IsTrue_0 = {val:false};
gdjs.PongCode.condition1IsTrue_0 = {val:false};
gdjs.PongCode.condition2IsTrue_0 = {val:false};
gdjs.PongCode.condition3IsTrue_0 = {val:false};
gdjs.PongCode.conditionTrue_1 = {val:false};
gdjs.PongCode.condition0IsTrue_1 = {val:false};
gdjs.PongCode.condition1IsTrue_1 = {val:false};
gdjs.PongCode.condition2IsTrue_1 = {val:false};
gdjs.PongCode.condition3IsTrue_1 = {val:false};


gdjs.PongCode.eventsList0x73907c = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "LayOut" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("random_layout"))), 0, 0);
}}

}


}; //End of gdjs.PongCode.eventsList0x73907c
gdjs.PongCode.eventsList0x71fafc = function(runtimeScene) {

}; //End of gdjs.PongCode.eventsList0x71fafc
gdjs.PongCode.eventsList0x7394f4 = function(runtimeScene) {

{

gdjs.PongCode.GDbrickObjects2.createFrom(runtimeScene.getObjects("brick"));

for(gdjs.PongCode.forEachIndex3 = 0;gdjs.PongCode.forEachIndex3 < gdjs.PongCode.GDbrickObjects2.length;++gdjs.PongCode.forEachIndex3) {
gdjs.PongCode.GDbrickObjects3.length = 0;


gdjs.PongCode.forEachTemporary3 = gdjs.PongCode.GDbrickObjects2[gdjs.PongCode.forEachIndex3];
gdjs.PongCode.GDbrickObjects3.push(gdjs.PongCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.PongCode.GDbrickObjects3.length ;i < len;++i) {
    gdjs.PongCode.GDbrickObjects3[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("random_color")));
}
}}
}

}


}; //End of gdjs.PongCode.eventsList0x7394f4
gdjs.PongCode.eventsList0x738e8c = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().get("random_layout").setNumber(gdjs.random(2) + 1);
}
{ //Subevents
gdjs.PongCode.eventsList0x73907c(runtimeScene);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getVariables().get("random_color").setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.PongCode.eventsList0x7394f4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.PongCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("device").setString("mobile");
}}

}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.PongCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("device").setString("pc");
}}

}


}; //End of gdjs.PongCode.eventsList0x738e8c
gdjs.PongCode.eventsList0x739cc4 = function(runtimeScene) {

{



}


{

gdjs.PongCode.GDbarreObjects2.createFrom(runtimeScene.getObjects("barre"));

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
gdjs.PongCode.condition2IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
gdjs.PongCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.PongCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects2[i].getX() > 38 ) {
        gdjs.PongCode.condition2IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects2[k] = gdjs.PongCode.GDbarreObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects2.length = k;}}
}
if (gdjs.PongCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDbarreObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDbarreObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDbarreObjects2[i].setX(gdjs.PongCode.GDbarreObjects2[i].getX() - (10));
}
}}

}


{



}


{

gdjs.PongCode.GDbarreObjects1.createFrom(runtimeScene.getObjects("barre"));

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
gdjs.PongCode.condition2IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
gdjs.PongCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.PongCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects1[i].getX() < gdjs.evtTools.window.getCanvasWidth(runtimeScene) - 45 ) {
        gdjs.PongCode.condition2IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects1[k] = gdjs.PongCode.GDbarreObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects1.length = k;}}
}
if (gdjs.PongCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDbarreObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDbarreObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDbarreObjects1[i].setX(gdjs.PongCode.GDbarreObjects1[i].getX() + (10));
}
}}

}


}; //End of gdjs.PongCode.eventsList0x739cc4
gdjs.PongCode.eventsList0x73a6e4 = function(runtimeScene) {

{

gdjs.PongCode.GDbarreObjects2.createFrom(runtimeScene.getObjects("barre"));

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects2[i].getX() < gdjs.evtTools.window.getCanvasWidth(runtimeScene) - 45 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects2[k] = gdjs.PongCode.GDbarreObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects2.length = k;}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects2[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) ) {
        gdjs.PongCode.condition1IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects2[k] = gdjs.PongCode.GDbarreObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects2.length = k;}}
if (gdjs.PongCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDbarreObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDbarreObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDbarreObjects2[i].setX(gdjs.PongCode.GDbarreObjects2[i].getX() + (10));
}
}}

}


{

gdjs.PongCode.GDbarreObjects1.createFrom(runtimeScene.getObjects("barre"));

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects1[i].getX() > 38 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects1[k] = gdjs.PongCode.GDbarreObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects1.length = k;}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDbarreObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDbarreObjects1[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) ) {
        gdjs.PongCode.condition1IsTrue_0.val = true;
        gdjs.PongCode.GDbarreObjects1[k] = gdjs.PongCode.GDbarreObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDbarreObjects1.length = k;}}
if (gdjs.PongCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDbarreObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDbarreObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDbarreObjects1[i].setX(gdjs.PongCode.GDbarreObjects1[i].getX() - (10));
}
}}

}


}; //End of gdjs.PongCode.eventsList0x73a6e4
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDballeObjects1Objects = Hashtable.newFrom({"balle": gdjs.PongCode.GDballeObjects1});gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbrickObjects1Objects = Hashtable.newFrom({"brick": gdjs.PongCode.GDbrickObjects1});gdjs.PongCode.eventsList0x73b0cc = function(runtimeScene) {

{

gdjs.PongCode.GDballeObjects2.createFrom(gdjs.PongCode.GDballeObjects1);

gdjs.PongCode.GDbrickObjects2.createFrom(gdjs.PongCode.GDbrickObjects1);


gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects2[i].getX() < (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointX("")) + 2 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects2[k] = gdjs.PongCode.GDballeObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects2.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects2 */
/* Reuse gdjs.PongCode.GDbrickObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].addPolarForce(180 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects2[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].setX((( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointX("")) - (gdjs.PongCode.GDballeObjects2[i].getWidth()));
}
}}

}


{

gdjs.PongCode.GDballeObjects2.createFrom(gdjs.PongCode.GDballeObjects1);

gdjs.PongCode.GDbrickObjects2.createFrom(gdjs.PongCode.GDbrickObjects1);


gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects2[i].getX() > (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointX("")) + (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getWidth()) - (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getWidth()) / 2 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects2[k] = gdjs.PongCode.GDballeObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects2.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects2 */
/* Reuse gdjs.PongCode.GDbrickObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].addPolarForce(180 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects2[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].setX((( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointX("")) + (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getWidth()));
}
}}

}


{

gdjs.PongCode.GDballeObjects2.createFrom(gdjs.PongCode.GDballeObjects1);

gdjs.PongCode.GDbrickObjects2.createFrom(gdjs.PongCode.GDbrickObjects1);


gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects2[i].getY() < (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointY("")) + 1 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects2[k] = gdjs.PongCode.GDballeObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects2.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects2 */
/* Reuse gdjs.PongCode.GDbrickObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].addPolarForce(0 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects2[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].setY((( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointY("")) - (gdjs.PongCode.GDballeObjects2[i].getHeight()));
}
}}

}


{

gdjs.PongCode.GDballeObjects2.createFrom(gdjs.PongCode.GDballeObjects1);

gdjs.PongCode.GDbrickObjects2.createFrom(gdjs.PongCode.GDbrickObjects1);


gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects2[i].getY() > (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointY("")) + (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getHeight()) - (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getHeight()) / 2 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects2[k] = gdjs.PongCode.GDballeObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects2.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects2 */
/* Reuse gdjs.PongCode.GDbrickObjects2 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].addPolarForce(0 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects2[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects2[i].setY((( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getPointY("")) + (( gdjs.PongCode.GDbrickObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDbrickObjects2[0].getHeight()));
}
}}

}


{


{
/* Reuse gdjs.PongCode.GDbrickObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDbrickObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDbrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.PongCode.eventsList0x73b0cc
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDballeObjects1Objects = Hashtable.newFrom({"balle": gdjs.PongCode.GDballeObjects1});gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbarreObjects1Objects = Hashtable.newFrom({"barre": gdjs.PongCode.GDbarreObjects1});gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbrickObjects2Objects = Hashtable.newFrom({"brick": gdjs.PongCode.GDbrickObjects2});gdjs.PongCode.eventsList0xb23e0 = function(runtimeScene) {

{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PongCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PongCode.eventsList0x738e8c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("device")) == "pc";
}if (gdjs.PongCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PongCode.eventsList0x739cc4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("device")) == "mobile";
}if (gdjs.PongCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PongCode.eventsList0x73a6e4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects1[i].hasNoForces() ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects1[k] = gdjs.PongCode.GDballeObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects1.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].addPolarForce(-(45) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}}

}


{



}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));
gdjs.PongCode.GDbrickObjects1.createFrom(runtimeScene.getObjects("brick"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDballeObjects1Objects, gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbrickObjects1Objects, false, runtimeScene, false);
}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].returnVariable(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")).setNumber((gdjs.PongCode.GDballeObjects1[i].getAverageForce().getAngle()));
}
}
{ //Subevents
gdjs.PongCode.eventsList0x73b0cc(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects1[i].getY() < 10 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects1[k] = gdjs.PongCode.GDballeObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects1.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].returnVariable(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")).setNumber((gdjs.PongCode.GDballeObjects1[i].getAverageForce().getAngle()));
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].addPolarForce(0 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].setY(11);
}
}}

}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects1[i].getX() > 790 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects1[k] = gdjs.PongCode.GDballeObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects1.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].returnVariable(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")).setNumber((gdjs.PongCode.GDballeObjects1[i].getAverageForce().getAngle()));
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].addPolarForce(180 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].setX(789);
}
}}

}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects1.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects1[i].getX() < 10 ) {
        gdjs.PongCode.condition0IsTrue_0.val = true;
        gdjs.PongCode.GDballeObjects1[k] = gdjs.PongCode.GDballeObjects1[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects1.length = k;}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].returnVariable(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")).setNumber((gdjs.PongCode.GDballeObjects1[i].getAverageForce().getAngle()));
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].addPolarForce(180 - (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle"))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].setX(11);
}
}}

}


{



}


{

gdjs.PongCode.GDballeObjects1.createFrom(runtimeScene.getObjects("balle"));
gdjs.PongCode.GDbarreObjects1.createFrom(runtimeScene.getObjects("barre"));

gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDballeObjects1Objects, gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbarreObjects1Objects, false, runtimeScene, false);
}if (gdjs.PongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDballeObjects1 */
/* Reuse gdjs.PongCode.GDbarreObjects1 */
{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].returnVariable(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")).setNumber((gdjs.PongCode.GDballeObjects1[i].getAverageForce().getAngle()));
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].addPolarForce(-((gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDballeObjects1[i].getVariables().get("ValeurAngle")))) + gdjs.random(5) - gdjs.random(5), 250, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDballeObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDballeObjects1[i].setY((( gdjs.PongCode.GDbarreObjects1.length === 0 ) ? 0 :gdjs.PongCode.GDbarreObjects1[0].getPointY("")) - 10);
}
}}

}


{



}


{

gdjs.PongCode.GDballeObjects1.length = 0;

gdjs.PongCode.GDbrickObjects1.length = 0;


gdjs.PongCode.condition0IsTrue_0.val = false;
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition0IsTrue_0;
gdjs.PongCode.GDballeObjects1_1final.length = 0;gdjs.PongCode.GDbrickObjects1_1final.length = 0;gdjs.PongCode.condition0IsTrue_1.val = false;
gdjs.PongCode.condition1IsTrue_1.val = false;
{
gdjs.PongCode.GDballeObjects2.createFrom(runtimeScene.getObjects("balle"));
for(var i = 0, k = 0, l = gdjs.PongCode.GDballeObjects2.length;i<l;++i) {
    if ( gdjs.PongCode.GDballeObjects2[i].getY() > 600 ) {
        gdjs.PongCode.condition0IsTrue_1.val = true;
        gdjs.PongCode.GDballeObjects2[k] = gdjs.PongCode.GDballeObjects2[i];
        ++k;
    }
}
gdjs.PongCode.GDballeObjects2.length = k;if( gdjs.PongCode.condition0IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDballeObjects2.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDballeObjects1_1final.indexOf(gdjs.PongCode.GDballeObjects2[j]) === -1 )
            gdjs.PongCode.GDballeObjects1_1final.push(gdjs.PongCode.GDballeObjects2[j]);
    }
}
}
{
gdjs.PongCode.GDbrickObjects2.createFrom(runtimeScene.getObjects("brick"));
gdjs.PongCode.condition1IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDbrickObjects2Objects) == 0;
if( gdjs.PongCode.condition1IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDbrickObjects2.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDbrickObjects1_1final.indexOf(gdjs.PongCode.GDbrickObjects2[j]) === -1 )
            gdjs.PongCode.GDbrickObjects1_1final.push(gdjs.PongCode.GDbrickObjects2[j]);
    }
}
}
{
gdjs.PongCode.GDballeObjects1.createFrom(gdjs.PongCode.GDballeObjects1_1final);
gdjs.PongCode.GDbrickObjects1.createFrom(gdjs.PongCode.GDbrickObjects1_1final);
}
}
}if (gdjs.PongCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pong", false);
}}

}


}; //End of gdjs.PongCode.eventsList0xb23e0


gdjs.PongCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PongCode.GDterrainObjects1.length = 0;
gdjs.PongCode.GDterrainObjects2.length = 0;
gdjs.PongCode.GDterrainObjects3.length = 0;
gdjs.PongCode.GDbarreObjects1.length = 0;
gdjs.PongCode.GDbarreObjects2.length = 0;
gdjs.PongCode.GDbarreObjects3.length = 0;
gdjs.PongCode.GDballeObjects1.length = 0;
gdjs.PongCode.GDballeObjects2.length = 0;
gdjs.PongCode.GDballeObjects3.length = 0;
gdjs.PongCode.GDbrickObjects1.length = 0;
gdjs.PongCode.GDbrickObjects2.length = 0;
gdjs.PongCode.GDbrickObjects3.length = 0;

gdjs.PongCode.eventsList0xb23e0(runtimeScene);
return;

}
gdjs['PongCode'] = gdjs.PongCode;
