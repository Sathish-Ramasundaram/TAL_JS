let count = 0;

function render() {
    console.log("Rendered");
    document.getElementById("count").innerText = count;
}

render();

document.getElementById("btn").addEventListener("click", () => {
    count = count + 1;
    console.log("Count changed to ", count);
    render();
});

