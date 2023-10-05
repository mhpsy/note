const product = {
    price: 10,
    num: 2
}
let total

const effect = () => total = product.price * product.num;

effect()

const productProxy = new Proxy(product, {
    get(target, key, receiver) {
        // return target[key]
        return Reflect.get(target, key)
    },
    set(target, key, newValue, receiver) {
        target[key] = newValue
        effect();
    }
})

console.log(total)

productProxy.num *= 20
console.log(total)


console.log(123)
