module.exports = input => {
    var r = input.map(s => s.match(/.+?(\d+).+?(\d+).+?(\d+)/)).map(m => ({
        speed: +m[1], flyTime: +m[2], restTime: +m[3], distance: 0, remaining: +m[2]
    }))

    for (var d = 0; d < 2503; d++) {
        r.forEach(e => {
            if (e.mode !== 'r') e.distance += e.speed
            if (!--e.remaining) {
                e.mode = e.mode !== 'r' ? 'r' : 'f'
                e.remaining = e.mode === 'f' ? e.flyTime : e.restTime
            }
        })
    }

    return r.reduce((r, v) => r > v.distance ? r : v.distance, 0)
}
