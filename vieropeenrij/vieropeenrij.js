
var player = true;


function vakKleuren(vakId){  
    
    
    console.log(vakId[4]);
    var x=vakId[4];


        for(var y = 5 ; y > -1 ; y--) {
        
            var vakId = "vak"+y+x; 
            var elem = document.getElementById(vakId);
            
            console.log(vakId)
            if (elem.bgColor !== "red" && elem.bgColor !== "yellow" ) {
                if (player == true) {
                   elem.bgColor = 'red'; 
                   player = false;
                }
                else {
                    elem.bgColor = 'yellow';
                    player = true;
                }
                
                break;

            }

        }
        
    }