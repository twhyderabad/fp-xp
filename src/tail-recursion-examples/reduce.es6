
function reduce(list, acc, func){
    if(list.length===0) return acc;

    return reduce(tail(list), func(acc, list[0]), func);
}


function map(list, func){
    if(list.length===0) return [];
    return [func(list[0])].concat( map(tail(list), func));
}


function mapWithReduce(list, func) {
    return reduce(list, [], (x, y)=> x.concat(func(y)));
}


function tail(list){
   return list.slice(1, list.length);
}

