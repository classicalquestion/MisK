let separator = java.io.File.separator;
run("chatutils.js");
setUpChat2();
DMessage("main: Beginning");
run("mediautils.js");
DMessage("Setting up media");
setUpMedia();
run("personalityutils.js");
DMessage("Setting up personality");
setUpVars();
run("Structure" + separator + "MissKinkiStructure1.js");
DMessage("main: End");