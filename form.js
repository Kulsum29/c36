class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(540,100);


        var input = createInput("Name");
        input.position(540,260);

        var button = createButton("Play");
        button.position(600,300);

        button.mousePressed(
            function(){
                //input should go to database //server share krdo/*

                var name = input.value();
                var greeting = createElement("h2");
                greeting.html("Hello , Welcome " + name)
                greeting.position(250,250)

                input.hide()
                button.hide()
            }
        )
    }
}