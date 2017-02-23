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

       from1 = parseFloat(from1);
       to1 = parseFloat(to1);
       from2 = parseFloat(from2);
       to2 = parseFloat(to2);

        if(from1 > to1)
        {
            var temp = to1;
            to1 = from1;
            from1 = temp;
        }

        if(from2 > to2)
        {
            var temp = to2;
            to2 = from2;
            from2 = temp;
        }

        if((from2 > to1) || (from1 > to2))
            {
                $("#showAnswer").text("Intersection: " + EMPTY_SET);
            }
        else
            {$("#showAnswer").text("Intersection: " + "[" + max(from1, from2) + "; " + min(to1, to2) + "]");}

    });


    function max(x, y)
    {return (x>y)?x:y;}

    function min(x, y)
    {return (x<y)?x:y;}

})