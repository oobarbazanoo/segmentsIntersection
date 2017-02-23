/**
 * Created by User on 23.02.2017.
 */

$(function()
{
    $("#button").click(function()
    {
        var from1 = $("#from1").val(),
            to1 = $("#to1").val(),
            from2 = $("#from2").val(),
            to2 = $("#to2").val(),
            emptySet = "∅";

        if(boundariesNotСoincide(from1, to1, from2, to2))
            {giveAnswer(emptySet);}

    });


    function boundariesNotСoincide(from1, to1, from2, to2)
    {
        
    }
})