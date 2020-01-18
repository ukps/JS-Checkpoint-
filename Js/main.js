
var inputLabel = document.querySelectorAll(".calc .btn");
var aff = document.querySelector("#aff");






function getValue(val) {

    if (val == '=') {

        var a = aff.value;

        aff.value = eval(a);


    } else {
        if (val == '99') {
            document.querySelector("#aff").value = '';
        }
        else {
            document.querySelector("#aff").value += val;
        }
    }
};

