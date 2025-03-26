function timeDifference(targetTime, time) {
    let nextBus = targetTime.split(":");
    let currTime = time.split(":");
    let nextBusMin = nextBus[1];
    let nextBusHour = nextBus[0];
    let currentMin = currTime[1];
    let currentHour = currTime[0];

    let hourDiff = (nextBusHour - currentHour);
    let minuteDiff = (nextBusMin - currentMin);
    if (minuteDiff < 0) {
        let hourDiffInMins = hourDiff * 60;
        let totalMinutes = hourDiffInMins - minuteDiff;
        hourDiff = Math.floor(totalMinutes / 60);
        minuteDiff = totalMinutes % 60;
        return (hourDiff + ":" + minuteDiff);
    }
    return (hourDiff + ":" + minuteDiff);

}

console.log(timeDifference("12:30", "07:55"));