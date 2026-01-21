function sayHello(): void {
  const message: string = "Hello Sathish, this is TypeScript!";
  const output = document.getElementById("output");
  if (output) {
    output.textContent = message;
  }
}
