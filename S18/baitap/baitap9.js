let hours = +prompt("Hours(0-23):");
let minutes = +prompt("Minutes(0-59):");
let seconds = +prompt("Seconds(0-59):");

if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59) && (seconds >= 0 && seconds <= 59)) {
    if (hours > 12 && hours < 24) {
        alert(`${hours-12}:${minutes}:${seconds} PM`);
    } else if (hours > 0 && hours <= 12) {
        alert(`${hours}:${minutes}:${seconds} AM`);
    }
}
