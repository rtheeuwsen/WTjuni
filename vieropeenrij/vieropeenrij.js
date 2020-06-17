function start(vakId){  

    var elem = document.getElementById(vakId);
            elem.bgColor = 'red';
    console.log(elem.bgColor);
    console.log(vakId[3]);
    var x=vakId[3];


        for(var y = 2 ; y < 0 ; y--) {
        
            var vakId = "vak"+x+y; 
            console.log(vakId)
            if (elem.bgColor == "red") {
                console.log(46)
            }




        }
        
    }





           

var elem = document.getElementById(vakId);
            elem.bgColor = 'red';
    console.log(vakId);