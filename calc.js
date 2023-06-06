function solve(val){
    var v = document.getElementById('i/p');
    v.value += val;
}

function result() {
    var num1 = document.getElementById('i/p').value ;
    var num2 = eval(num1);
    document.getElementById('i/p').value = num2;
}
function Clear() {
    var inp = document.getElementById('i/p');
    inp.value = '';
}

function back() {
    var b = document.getElementById('i/p');
    b.value = b.value.slice(0,-1);
}
