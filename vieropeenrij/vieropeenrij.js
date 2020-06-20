
var speler1 = "speler1";
var speler2 = "speler2";
var steenKleur1;
var steenKleur2;
var player;

function spelerSubmit(){
    speler1 = document.getElementById("speler1").value;
    speler2 = document.getElementById("speler2").value;
    player = speler1;
    document.getElementById("spelerBeurt").innerHTML = player;

    kleur1 = document.getElementById("kleur1");
    steenKleur1 = kleur1.options[kleur1.selectedIndex].value;

    kleur2 = document.getElementById("kleur2");
    steenKleur2 = kleur2.options[kleur2.selectedIndex].value;

}

function vakKleuren(vakId){ 
    
    console.log(steenKleur1);
    console.log(steenKleur2); 
      
    var x=vakId[4];        

        for(var y = 5 ; y > -1 ; y--) {
        
            var vakId = "vak"+y+x; 
            var elem = document.getElementById(vakId);

            if ((elem.bgColor == steenKleur1 || elem.bgColor == steenKleur2) && y == 0) {
                alert("Kolom vol! Selecteer een andere kolom."); 
            }
            
            if (elem.bgColor !== steenKleur1 && elem.bgColor !== steenKleur2) {
                if (player == speler1) {
                   elem.bgColor = steenKleur1; 
                   player = speler2;
                }
                else {
                    elem.bgColor = steenKleur2;
                    player = speler1;
                }   

                document.getElementById("spelerBeurt").innerHTML = player;

                break;

            }
           
        }
        
    }

    function reset(){
        location.reload();
    }
    
    
    
    /*  */