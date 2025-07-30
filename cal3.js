var output = document.getElementById("output_screen");
function clear_all() {
    output.value = "";
}
function delete_one() {
    output.value = output.value.slice(0, -1);
}
function display(item) {
    output.value += item;
}
function calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid operation");
    }
}