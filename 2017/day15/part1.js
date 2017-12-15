module.exports = input => {
    let [a, b] = input.join``.match(/\d+/g).map(i => +i)
    let count = 0

    for (let i = 0; i < 40000000; i++) {
        a = (a * 16807) % 2147483647
        b = (b * 48271) % 2147483647

        if ((a & 0xFFFF) === (b & 0xFFFF)) count++
    }

    return count
}