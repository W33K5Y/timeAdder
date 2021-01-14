

//! I need to convert everything into one single value below is a function converToSeconds to do so
const convertToSeconds = (val, label) => {
switch(label) {
    case 'seconds':
    case 'second':
    return val;
    case 'minute':
    case 'minutes':
        return val * 60;
    case 'hour':
    case 'hours':
    return val * 60 * 60;
    case 'day':
    case 'days': 
    return val * 24 * 60 * 60;
    default: return console.error('unexpected value or label'),0;
}
}

// ! I need to create a function that will check labels for correct plural uses i.e ===> 1 minute not 1 minutes 

const labelChecker = (val, label) => {
    if (val !== 1 && label === 'minute' ||
        val !== 1 && label === 'day' || 
        val !== 1 && label === 'hour') {    
        console.error(`Please give the label the proper plural value`)
        val = 0;
        return 0;
    }
    if (val === 1 && label === 'minutes' ||
    val === 1 && label === 'days' || 
    val === 1 && label === 'hours') {    
    console.error(`Please give the label the proper plural value`)
    val = 0;
    return 0;
}
    return [val,  label]

}

// ! function to convert seconds into the apropriate value 
const secsToString = (combinedSecs) => {
    //  less than minute
    if(combinedSecs < 60) {
        return returnMessage(0,0,0,combinedSecs);
    
    }
    // more than minute less than hour
    else if(combinedSecs >= 60 && combinedSecs <= 3600) {
        let minutes = Math.floor(combinedSecs / 60);
        let seconds = combinedSecs % 60;
        return returnMessage(0,0,minutes,seconds);
    }
    // more than an hour less than a day 
    else if(combinedSecs > 3600 && combinedSecs <= 86400) {
        let hours = Math. floor(combinedSecs / 3600);
        let minutes = Math.floor((combinedSecs / 60) % 60 );
        let seconds = combinedSecs % 60;
        console.log(hours)
        return returnMessage(0,hours,minutes,seconds);
    }
    // More than one Day 
    else if(combinedSecs > 86400) {
    
        let days = Math.floor(combinedSecs / 86400 );
        let hours = Math.floor(combinedSecs / 3600 % 24);
        let minutes = Math.floor((combinedSecs / 60) % 60 );
        let seconds = combinedSecs % 60;
        console.log(hours)
        return returnMessage(days,hours,minutes,seconds);
    }

}
// ! this needs to take in the new label and then spit out the correct noun 
function returnMessage(day=0,hour=0,min=0,sec=0) {
    let minutesMessage; let hoursMessage; let daysMessage;
    min  ===  1   ? minutesMessage = 'minute': minutesMessage = 'minutes';
    hour ===  1   ? hoursMessage   = 'hour'  : hoursMessage   = 'hours';
    day  ===  1   ? daysMessage    = 'day'   : daysMessage    = 'days';
    
    return `${day} ${daysMessage} ${hour} ${hoursMessage} ${min} ${minutesMessage} ${sec}s`
}



// ! the final function 
function timeAdder(value1, label1, value2, label2) {
const firstVal = labelChecker(value1,label1);
const secondVal = labelChecker(value2,label2);
if (firstVal && secondVal) {
   
const valOneToSecs = convertToSeconds(firstVal[0],firstVal[1]);
const valTwoToSecs = convertToSeconds(secondVal[0],secondVal[1]);
// ! now add both values together and insert function that returns back that v in days 
let combinedSecs = valOneToSecs + valTwoToSecs;
return secsToString(combinedSecs); 
}
}
console.log(timeAdder(5,'day', 16, 'minutes'));

