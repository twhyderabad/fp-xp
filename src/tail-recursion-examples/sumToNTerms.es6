

function sumToNWithRecursion(n) {
    if(n<=1) return n;
    return n + sumToNWithRecursion(n-1);
}



function sumToNWithTailRecursion(n) {
    function innerTailRecursion(sum, n) {
        if (n <= 0) return sum;
        return innerTailRecursion(sum + n , n -1);
    }
    return innerTailRecursion(0, n);
}