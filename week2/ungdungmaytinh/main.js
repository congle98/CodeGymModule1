function pl() {
    let value1=document.getElementById("i1").value;
    let vl1=parseInt(value1);
    let value2=document.getElementById("i2").value;
    let vl2=parseInt(value2);
    let result=vl1+vl2;
    document.getElementById("show").innerText="Result of Addition ="+" "+result;
    pr
}
function sub() {
    let value1=document.getElementById("i1").value;
    let vl1=parseInt(value1);
    let value2=document.getElementById("i2").value;
    let vl2=parseInt(value2);
    let result=vl1-vl2;
    document.getElementById("show").innerText="Result of Subtraction ="+" "+result;

}
function mul() {
    let value1=document.getElementById("i1").value;
    let vl1=parseInt(value1);
    let value2=document.getElementById("i2").value;
    let vl2=parseInt(value2);
    let result=vl1*vl2;
    document.getElementById("show").innerText="Result of Multiplication ="+" "+result;
}
function di() {
    let value1=document.getElementById("i1").value;
    let vl1=parseInt(value1);
    let value2=document.getElementById("i2").value;
    let vl2=parseInt(value2);
    let result=vl1/vl2;
    document.getElementById("show").innerText="Result of Division ="+" "+result;
}