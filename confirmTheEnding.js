function confirmEnding(str, target) {
    const check = str.substring(str.length - target.length)
    if(check == target) return true;
    return false
}
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")