
function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return ("Leap");
            }
            else {
                return ("Not Leap");
            }
        }
        else {
            return ('Leap Year');
        }
    }
    else {
        return ('Not Leap Year');
    }
}

function isLeapAnotherWay(year) {
    
  return (year%4==0?(year%100==0?( year%400==0?'Leap Year':'Not Leap' ):'Leap Year' ):'Not Leap');
}



console.log(isLeap(2016));

console.logisLeapAnotherWay(2016);