const _ = require('lodash')
module.exports = input => {
    return input
        .map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
        .map(v => ({
            name: v[1],
            sector: +v[2],
            checksum: v[3],
            chars: _(v[1].replace(/-/g, '').split``
                .reduce((p, v) => {
                    let b = _.find(p, {l: v}) || (p.push({l: v, c: 1}))
                    b.c++
                    return p
                }, []))
                .sortBy('l')
                .reverse()
                .sortBy('c')
                .reverse()
                .take(5)
                .map('l')
                .value()
        }))
        .filter(v => v.checksum.split``.every(l => v.chars.includes(l)))
        .reduce((p, v) => p + v.sector, 0)
}
