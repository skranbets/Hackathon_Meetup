
// scheduleArray: 2d array where time is stored as string "4:00"
// durationBlocks: number of 30 minutes e.g 1 hour is 2

function finder(scheduleArray, durationBlocks) {
    
    // initialize each slots to false
    var weekSlots = [];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 34; j++) {
            weekSlots[i][j] = false;
        }
    }

    // set true to occupied slots
    for (let i = 0; i < 7; i++) {
        var hours = 8;
        var minutes = false;
        var timeIndex = 0;
        while (hours != 24) {
            var time;
            if (minutes) {
                time = hours + ":" + minutes;
                minutes = false;
            }
            else {
                time = hours + ":00";
                minutes = true;
            }
            if (time == scheduleArray[i][timeIndex]) {
                weekSlots[i][timeIndex] = true;
            }
            hours++;
            timeIndex++;
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 34; j++) {
            var timeSlots = [];
            for (let k = j; k-j < durationBlocks; k++) {
                if (!weekSlots[i][k]) {
                    timeSlots.push(scheduleArray[i][k]);
                }
                else {
                    timeSlots = [];
                    break;
                }
            }
        }
    }
}

function finder(scheduleArray, durationBlocks) {
    var weekSlots = [];
    for (let i = 0; i < 7; i++) {
        var hours = 8;
        var minutes = false;
        var timeIndex = 0;
        var daySlots = [];
        while (hours != 24) {
            var time;
            if (minutes) {
                time = hours + ":" + minutes;
                minutes = false;
            }
            else {
                time = hours + ":00";
                minutes = true;
            }
            if (time != scheduleArray[timeIndex]) {
                daySlots.push(time);
            }
            else {
                if (daySlots.length < durationBlocks) {
                    daySlots = [];
                }
                else {
                    weekSlots.push(daySlots);
                }
            }
            hours++;
            timeIndex++;
        }
    }
}