$(document).ready(function(){

    var doc = $(document);

    var width = doc.width() -50;
    var height = doc.height() -50;

    var shapes = [ $(".circle"), $(".triangle"), $(".square") ]


    function randomStuff(){
        var randomShape = shapes[ Math.floor(Math.random() * shapes.length ) ]
        var clone = randomShape.clone().appendTo('body');

        clone.last().css('right', Math.random() * width )
        clone.last().css('top', Math.random() * height )
    }
    randomStuff();

    setInterval(function (){

        randomStuff();

    },50)

    console.log(randomShape)

})
