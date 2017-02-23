/**
 * Created by User on 23.02.2017.
 */

$(function()
{
    var EMPTY_SET = "∅";
    $("#button").click(function()
    {
        var from1 = $("#from1").val(),
            to1 = $("#to1").val(),
            from2 = $("#from2").val(),
            to2 = $("#to2").val();

        var from, to;
        for(var i = from1; i <= to1; i++)
        {
            if(!from && belongs(i, from2, to2))
                {from = i;}
            else if(from && belongs(i, from2, to2))
                {to = i;}
        }

        if(from)
            {$("#showAnswer").text("Intersection: " + "[" + from + "," + to + "]");}
        else
            {$("#showAnswer").text("Intersection: " + EMPTY_SET);}
    });


    function belongs(point, from, to)
    {return (from <= point) && (point <= to);}

})