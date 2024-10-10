function insert(num) {
    document.form.text.value = document.form.text.value + num;
}

function clean() {
    document.form.text.value = "";
}

function back() {
    var text = document.form.text.value;
    document.form.text.value = text.substring(0,text.length-1);
}

function ravno () {
    var text = document.form.text.value;
    if (text) {
        document.form.text.value = eval(text);
    }
}