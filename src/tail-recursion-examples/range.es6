
//Recursive Function
function range(start, end) {
    var arr= [];
    arr.push(start);
    return start >= end? arr : arr.concat(range( ++start, end));
}

// Tail Recursive Function
function rangeTR(start, end) {
    function rangeAux(start, end, arr) {
        arr.push(start);
        return start >= end ? arr : rangeAux(++start, end, arr);
    }
    return rangeAux(start, end, []);
}

//Tail Recursion with Trampolines
function rangeWithTrampoline(start, end) {
    function rangeForTrampoline(start, end) {
        function rangeAux(start, end, arr) {
            arr.push(start);
            return start >= end? arr : function () {
                return rangeAux(++start, end, arr);
            }
        }
        return rangeAux(start, end, []);
    }

    return trampoline(rangeForTrampoline)(start, end, []);
}

function trampoline(fn){
    return function(){
        var res = fn.apply(this, arguments);
        while(res instanceof Function){
            res = res();
        }
        return res;
    }
}