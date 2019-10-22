

    // Mainīgais - Pirmais nospiestais skaitlis, kas glabājas atmiņā
    let prevVal = "";
     
    //Mainīgais - Otrais skaitlis, ko ievada
    let newVal = "";
     
    // Mainīgais -Darbības rezultāts
    let resultVal = "";
     
    // Mainīgais - matemātiskais operators, darbība
    let mathOperator = "";
     
    // Mainīgais - decimālajai zīmei
    let decimalClicked = false;
     
     
    
    // funkcija, kura tiek izsaukta, nospiežot cipara pogu, skaitļu iegūšana
    function numButPress(num){
       
        // Pārbauda, vai poga ir nospiesta
        if(resultVal){
            
            // Piešķir mainīgajam newVal nospiesto pogu vērtību
            newVal = num;
            
            // Atjauno mainīgā resultVal vērtību - tukšs
            resultVal = "";
        } else {
            
            // Pārbauda decimālā skaitļa esamību
            if(num === '.'){
                if(decimalClicked != true){
                    newVal += num; // Rodas piem., 2.3
                    decimalClicked = true;
                }
            } else {
                newVal += num; //Rodas, piem 23
            }
        }
            
        
        // Atjauno skaitļa vēŗtību ievades laukā
        document.getElementById("entry").value = newVal;
    }
     // funkcija, kas tiek izsaukta ar Matemātiskās darbības pogas nospiešanu
    function mathButPress(operator){
        
        // Pārbauda skaitļa esošo vērtību, 
        // kas atrodas ievades laukā pirms darbības uzsākšanas
        if(!resultVal){  // ja laukam nav piešķirta vērtība, tad...
            prevVal = newVal;
        } else {
     
                        // ja ir redzams iepriekšējās  darbības rezultāts, 
            // to (iepriekšējo aprēķinu rezultātu) piešķir mainīgajam prevVal...
            prevVal = resultVal;
        }
        
       
        // Atjauno vietu jauna cipara veidošanai (izdzēš...)
        // atjauno mainīgo sākotnējās  vērtības 
        newVal = "";
        
         // atjauno mainīgo sākotnējās  vērtības 
        decimalClicked = false;
        
         // atjauno mainīgo sākotnējās  vērtības 
        mathOperator = operator;
     
        // Prepare entry for receiving new numbers
         // atjauno mainīgo sākotnējās  vērtības 
        resultVal = "";
        document.getElementById("entry").value = "";
    }
     
    function equalButPress(){ // funkcija, kas tiek izsaukta, nospiežot vienādības zīmi
        // Reset decimalClicked
        // atjauno mainīgo sākotnējās  vērtības
        // decimalClicked = false;
     
        
        //ciparu virkni konvertē par skaitli
        prevVal = parseFloat(prevVal);
        newVal = parseFloat(newVal);
     
        
        //pārbauda un izpilda atbilstošo darbību
        switch(mathOperator){
            case "+":
                resultVal = prevVal + newVal;
                break;
            case "-":
                resultVal = prevVal - newVal;
                break;
            case "*":
                resultVal = prevVal * newVal;
                break;
            case "/":
                resultVal = prevVal / newVal;
                break;
        
            
            // Ja ievadītā darbība nesakrīt ar kādu no operatoriem, tad
            // mainīgajam resultVal piešķir newVal vērtību
            default:
                resultVal = newVal;
        }
     
        
        // Lai veiktu nākamos aprēķinus ar iepriekš iegūto rezultātu, tad 
        // rezultāta vērtību pišķir mainīgajam prevVal
        prevVal = resultVal;
     

        // Aprēķinu rezultāta izvade
        document.getElementById("entry").value = resultVal;
    }
     
    // Funkcija, kas notīra ievades lauku
    function clearButPress(){
        prevVal = "";
        newVal = "";
        resultVal = "";
        mathOperator = "";
        decimalClicked = false;
        document.getElementById("entry").value = "0";
    }
     
    
     
