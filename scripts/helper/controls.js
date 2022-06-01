let threshold = document.getElementById("customRange").value;
document.getElementById("threshold_val").innerHTML = threshold;

function thr() {
    threshold = document.getElementById("customRange").value;
    document.getElementById("threshold_val").innerHTML = threshold;
    return threshold;
}

export {thr};