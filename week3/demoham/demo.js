function square(a) {
    let result=a*a;
    return  result;
}
// let squareOf2=square(2);
// document.write("squareOf2: "+squareOf2+"<br>");
// let squareOf5=square(5);
// document.write("squareOf5: "+squareOf5)
function caculate() {
   let input = document.getElementById("input").value;
    var result=square(input);
    document.getElementById("result").innerText=result;
}