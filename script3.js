/**
 * Created by HP on 26.08.2016.
 */
var catchClick = document.getElementById("calculator").addEventListener("click", myCalculation);
function myCalculation (event) {

    var input =  event.target.textContent;


    if (input != "=" && input != "C") {
        var AddToTotal = document.getElementById('total').textContent += input;
    }
    else if (input == "=") {
        var AddToTotal = document.getElementById('total').textContent += "";
        var AddToTotal = document.getElementById('total').textContent = eval(AddToTotal);
    }

    else if (input== "C") {
        var AddToTotal = document.getElementById('total').textContent = " ";
    }

}
