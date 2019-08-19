CMessage("%subname%", 0);
if (randomInteger(0, 1) == 1)
{
    CMessage("Stop stroking", 0);
    stopStroking();
}
else
{
    startEdging();
    if (randomInteger(0, 9) <= 6)
    {
        CMessage("Stop", null, false);
        CMessage("Let the edge fade away", 0);
    }
    else
    {
        CMessage("Hold it", 0);
        holdEdge(randomInteger(10, 60));
    }
}