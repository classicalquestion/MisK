DMessage("MissKinkiStructure1: Beginning");
preferredSessionLength = getVar("prefSessionLength");
DMessage("Starting session");

//run("Structure" + separator + "Modules" + separator + "xy.js");

if(getVar("!setupvariables"))
{
	DMessage("Need new setup");
	run("Structure" + separator + "FirstTime" + separator + "IntroductionAndSettingVar.js");
	run("Structure" + separator + "FirstTime" + separator + "HelloDomme.js");
}
else
{
	DMessage("Starting Check-Up")
	run("Structure" + separator + "Start" + separator + "CheckUp" + separator + "*.js");
	DMessage("Finding start module");
	run("Structure" + separator + "Start" + separator + "*.js");
	DMessage("Starting module");
	firstRun = true;
	while(continueSession()|| firstRun)
	{
		run("Structure" + separator + "Modules" + separator + "ModuleSelector.js");
		if(randomInteger(1, 4) == 1)
		{
			run("Structure" + separator + "Modules" + separator + "ModuleSelector.js");
		}
		else
		{
			run("Structure" + separator + "Link" + separator + "*.js");
		}
		firstRun = false;
	}
	run("Structure" + separator + "End" + separator + "*.js");
}
DMessage("MissKinkiStructure1: End");