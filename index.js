console.log("hola mundo");
//funcion para sumar dos numeros
function sumar(a, b) {
    return a + b;
}
//funcion de fibonacci
function fibonacci(n) {
    if (n <= 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}