let count = 0;

document.getElementById("show").innerHTML = `so lan bam: ${count}`;

function grow() {
    count++;
    document.getElementById("show").innerHTML = `so lan bam: ${count}`;
}