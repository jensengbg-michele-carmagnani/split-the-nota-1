
/*


const tip;
//Dessa är alla variabler du behöver använda. 
//De ska dock ligga i olika funktioner och inte nedanför.

/*const tip;
const sum;
const numberOfFriends;
const total;
const friendSum;
const sumDivided;
const calculatedTip;
const total; */

//Hämtar det som skrivits i inputfältet med ID tip
document.getElementById('tip').value;

*/


document.getElementById('calculateButton').addEventListener('click', function() {
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;
    
    
    const calculatedTip = calculateTip(sum, tip);

    const sumDivided = showDividedSum(calculatedTip);

    const friendSum = divideTotal(total, numberOfFriends);

    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    
    
});




function calculateTip(sum, tip) {
   const total =  parseInt(sum) * parseFloat(tip);
   return total;
    
}
function showDividedSum(sum) {
    const sumDivided = parseInt(sum) + calculatedTip;
    return sumDivided;
    
    
}
 function divideTotal(total, numberOfFriends) {
   const friendSum = total / parseInt(numberOfFriends);
    return friendSum;

}
//Hämtar det som skrivits i inputfältet med ID sum
document.getElementById('sum').value;





//Returnerar värdet i variablen sumDivided i en funktion
return sumDivided;







//Returnerar värdet i variablen total i en funktion
return total;


//Hämtar det som skrivits i inputfältet med ID numberOfFriends
document.getElementById('numberOfFriends').value;
