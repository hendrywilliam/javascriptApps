function confirmEnding(str, target) {
    const check = str.substring(str.length - target.length)
    if(check == target) return true;
    return false
}
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")

// fancier solution

function fancierConfirmEnding(str, target) {
    return str.slice(str.length - target.length) === target
}
fancierConfirmEnding("Bastian", "n");
fancierConfirmEnding("Congratulation", "on")
