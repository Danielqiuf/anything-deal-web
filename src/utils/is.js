export function def(target) {
    return target !== undefined && target !== null
}
export function func(target) {
    return typeof target === 'function'
}
export function object(target) {
    return target !== null && typeof target === 'object'
}
export function promise(target) {
    return object(target) && func(target.then) && func(target.catch)
}
export function str(target) {
    return typeof target === 'string'
}
export function date(target) {
    return Object.prototype.toString.call(target) === '[object Date]' && !Number.isNaN(target.getTime())
}
export function mobile(target) {
    target = target.replace(/[^-|\d]/g, '')
    return /^((\+86)|(86))?(1)\d{10}$/.test(target) || /^0[0-9-]{10,13}$/.test(target)
}
export function num(target) {
    return typeof target === 'number' || /^\d+(\.\d+)?$/.test(target)
}

export function array(target) {
    return typeof target === 'object' && Object.prototype.isPrototypeOf.call(Array.prototype, target)
}
