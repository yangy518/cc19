$(document).ready(function(){
    //jquery boiler plate

    var text ="javascript is hard!";
//Defining a variable
    var box = $("#box");
//Defining a variable for a selected element

    //we are going to now define what the function is, and how it is supposed to work.
    var addTextToBox = function(){
        //    Creating a Function here,
        var textBox= $("<span></span>");

        //  Creating a new element
        textBox.addClass("text-box");
        textBox.append(text);
        box.append(textBox);
    //    append means to add on at the end
        textBox.click(enlargebox);
    //    run the function enlargebox, after the textbox is clicked;
    }





    addTextToBox();
//     Calling the previously defined function -> ordering the function to action
    box.click(addTextToBox);
//    Creating an event listener; -> ordering to keep on adding when  clicking

    var enlargebox = function(){
        console.log(this);
        $(this).addClass("Big");
    }

});

