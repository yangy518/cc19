// Wait for page to load
$(document).ready(function() {

    // Create an array named "colors" with at least
    // 5 different CSS color values
    var colors=["blue", "skyblue", "darkblue", "orange", "white"];

    var colorIndex = 0;
    //0 means the first color, which is the red

    $(".quadrant").click(function() {

        // Create a variable "color" and set it to the color
        // in the array "colors" located at the index defined as "colorIndex"
        var color=colors[colorIndex]




        // Shows colorIndex and color values in the browser "console"
        console.log(colorIndex, color);



        // Sets the CSS background to the variable color;
        $(this).css({
            background: color
        });

        // Add to "colorIndex" so the next click
        // will use the next color in the array
        // ???????????????????????????????
        colorIndex=(colorIndex+1);
        //	it adds one, so the next click, it will add up by 1. so it will keep adding up, till 5.

    });

});