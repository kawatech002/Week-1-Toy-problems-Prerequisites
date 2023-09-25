function calculateDemeritPoints(speed) {
    // Define speed limit
    const maximumSpeed = 70;
    // Define the rate of demerit points
    const demeritPointsRate = 5;
    // Define the maximum points a driver can get to get his license suspended
    const maximumPoints = 12;
    
    // If speed is 70 or less, the console should print "ok"
    if (speed <= maximumSpeed) {
        console.log("Ok");
    }
    // Otherwise, if speed exceeds the maximum, calculate demerit points
    else {
        const demeritPoints = Math.floor((speed - maximumSpeed) / demeritPointsRate);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > maximumPoints) {
            console.log("License suspended");
        }
    }
}

