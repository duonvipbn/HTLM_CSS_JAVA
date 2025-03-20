let progressValue = 0;

function updateProgress(value) {
    progressValue += value;
    if (progressValue > 100) progressValue = 100;
    if (progressValue < 0) progressValue = 0;

    document.getElementById("progress").style.width = progressValue + "%";
}