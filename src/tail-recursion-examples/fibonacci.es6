
//Recursive Function
function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


//Tail Recursive Function
function fibonacciTR(n) {
    if (n === 0 || n === 1) return n;
    return fib_iter(0, 1, n);

    function fib_iter(acc, a, n) {
        if(n === 0) return acc;
        return fib_iter((acc+a), acc, n-1);
    }
}


