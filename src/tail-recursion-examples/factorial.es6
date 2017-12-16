
function factorialWithIteration(n) {
    let acc = 1;
    for (let i = 1; i <= n; i++)
        acc = acc * i;
    return acc;
}

//Recursive Function
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// Tail Recursive Function
function factorialTR (n) {
    function auxillary_fact_function(acc, counter, max_count) {
        if(counter > max_count) {
            return acc;
        }
        return auxillary_fact_function(acc*counter, counter+1, max_count);
    }
    return auxillary_fact_function(1, 1, n);
}

