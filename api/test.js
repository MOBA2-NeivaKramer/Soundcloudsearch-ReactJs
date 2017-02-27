const { describe, it } = require('mocha')
const assert = require('assert')
const api = require('./index.js')

describe('api', () => {
    it('finds a location', () => {
        return api.findLocation('Winterthur').then(result => {
            assert.equal(result.stations[0].name, 'Winterthur')
        })
    })

    it('returns the stationboard', () => {
        return api.getStationboard({ id: '008506000'}).then(result => {
            assert.ok(result.station)
            assert.ok(result.stationboard)
        })
    })
})