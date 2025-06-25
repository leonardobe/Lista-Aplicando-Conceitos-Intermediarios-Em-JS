/*Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.*/

const { performance } = require('perf_hooks');

function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        
        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}
function fibonacci(n) {
    if(n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

const memoizedFastFib = memoize(function fastFib(n) {
    if(n < 2) return n
    return fastFib(n - 1) + fastFib (n -2)
}) 

let start
let end

// ⏱ Com memoize
start = performance.now();
console.log('Resultado com memoize (1ª vez):', memoizedFastFib(47));
end = performance.now();
console.log(`Tempo com memoize (1ª vez): ${(end - start).toFixed(2)} ms`);

start = performance.now();
console.log('Resultado com memoize (cache):', memoizedFastFib(47));
end = performance.now();
console.log(`Tempo com memoize (cache): ${(end - start).toFixed(2)} ms`);

// ⏱ Sem memoize
start = performance.now();
console.log('Resultado sem memoize:', fibonacci(47));
end = performance.now();
console.log(`Tempo sem memoize: ${(end - start).toFixed(2)} ms`);

start = performance.now();
console.log('Resultado sem memoize novamente:', fibonacci(47));
end = performance.now();
console.log(`Tempo sem memoize novamente: ${(end - start).toFixed(2)} ms`);
