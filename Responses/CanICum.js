addResponseIndicator("can i cum", "can i orgasm", "please cum", "please orgasm", "let me cum", "let me orgasm");
//run("allutils.js");

function canICumResponse(message) {
    if (getResponsesDisabled()) {
        return false;
    }
    if (isEdging())
    {
        var percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
        var apathyMood = getApathyMoodIndex();
        var chance = 0.071295 + 2.6298045 * percentSession - Math.pow(percentSession, 3) - 0.00054647 * apathyMood - 
            (0.0006447 * apathyMood * percentSession) - (2.557387 * percentSession * Math.cos(percentSession));
        var random = randomInteger(1, 100);
        if (random >= (chance * 100)) {
            run("Structure\\End\\*.js");
        }
        else
        {
            increaseAnger(3);
        }
    }
    else if (isStroking())
    {
        var percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
        var apathyMood = getApathyMoodIndex();
        var chance = 0.041295 + 2.2298045 * percentSession - Math.pow(percentSession, 3) - 0.00054647 * apathyMood -
            (0.0006447 * apathyMood * percentSession) - (2.557387 * percentSession * Math.cos(percentSession));
        var random = randomInteger(1, 100);
        if (random >= (chance * 100)) {
            run("Structure\\End\\*.js");
        }
        else {
            increaseAnger(3);
        }
    }
    else {
        CMessage("You shouldnt even be stroking %petname%");
		increaseAnger(3);
    }
    return true;
}