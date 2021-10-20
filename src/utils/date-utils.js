import { getDay, getMonth, getWeeksInMonth, lastDayOfMonth, startOfMonth, getYear, endOfMonth   } from "date-fns";

const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

const days = {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun'
}

const getDateValues = (date) => {
    const startDate = startOfMonth(date);
    const endOfMonth = lastDayOfMonth(date);
    const startDay = getDay(startDate);
    const endDay = getDay(endOfMonth);
    const month = getMonth(date);
    const weeksInMonth = getWeeksInMonth(startDate, {
        weekStartsOn: 1
    });

    const weeksArray = getWeeksArray(weeksInMonth, startDay, endDay, month);
    return getMonthDateValue(weeksArray, month);
}


const getWeeksArray = (weeksInMonth, startDay, endDay) => {
    const arr = []
    for(let i = 0; i < weeksInMonth; i++) {
        
        const weekArray = new Array(7);
        
        if( i === 0) {
            weekArray.fill(0);
            if(startDay !== 0 && startDay !== 6){
                weekArray.fill(1, startDay - 1);
            } else if( startDay === 6 ) {
                weekArray.fill(1, 5);
            } else if( startDay === 0) {
                weekArray.fill(1, 6);
            }
        } 
        else if( i > 0 && i < weeksInMonth - 1) {
            weekArray.fill(1);
            
        } else if( i === weeksInMonth - 1) {
            weekArray.fill(1);
            if(endDay === 6 ) {
                weekArray.fill(0, 6);
            } else if (endDay === 0) {
                weekArray.fill(1);
            } 
            else  if(endDay > 0 ){
                weekArray.fill(0, endDay);
            } 
        }
        
        arr.push(weekArray);
    }
    return arr;
}

const getMonthDateValue = (weeksArray, month) => {
    const monthName = months[month];
    const monthWeeksArray = [];
    let num = 1;
    for(let i = 0; i < weeksArray.length; i++) {
        
        const week = weeksArray[i];
        const arr = new Array(7);
        arr.fill(0)
        for(let j = 0; j < 7; j++) {
            
            if(week[j] === 1) {
                
                const dayName = days[j];
                arr[j] = num + " " + monthName; // + " " + dayName;
                num++;
            }
            
        }
        monthWeeksArray.push(arr);
    }
    return monthWeeksArray;
}


const getEndDate = (date) => {
    const endOfMonth = lastDayOfMonth(date);
    // const month = getMonth(date);
    // const year = getYear(date)
    // const endDate = new Date(year, month+1, endOfMonth);
    console.log(endOfMonth);
    return endOfMonth;
}

export { getDateValues, getEndDate };

