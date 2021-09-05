var name1 = prompt('Enter name 1:' )
var name2 = prompt('Enter name 2:' )

var loveScore = Math.ceil(Math.random()*100);


console.log(`${name1} and ${name2}'s love score is ${loveScore}%`);

loveScore > 50 ?  (loveScore>=80 ? console.log('You love each other') : console.log('Moderate relationship') ) 
                                                                      :  console.log('Not a strong relationship');
