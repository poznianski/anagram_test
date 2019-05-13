function compare (a, b) {
    if (!(a && b)) {
        return false
    }
        
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    
        return z === y;

}


export default compare;