function start(vakId){  

    
    
    console.log(vakId[4]);
    var x=vakId[4];


        for(var y = 2 ; y > -1 ; y--) {
        
            var vakId = "vak"+y+x; 
            var elem = document.getElementById(vakId);
            
            console.log(vakId)
            if (elem.bgColor !== "red") {
                elem.bgColor = 'red';
                break;

                console.log(46)
                console.log(elem.bgColor);
            }




        }
        
    }





           

var elem = document.getElementById(vakId);
            elem.bgColor = 'red';
    console.log(vakId);