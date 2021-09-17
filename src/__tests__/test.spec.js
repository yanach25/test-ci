import { getHealth } from '../index'

describe('test getHealth function', () => {
    it('getHealth to return healthy if health more than 50', () => {
        expect(getHealth({ name: 'test', health: 70 })).toBe('healthy');
    })

    it('getHealth to return critical if health less than 15', () => {
        expect(getHealth({ name: 'test', health: 10 })).toBe('critical');
    })

    it('getHealth to return wounded if health is between 15 and 50', () => {
        expect(getHealth({ name: 'test', health: 49 })).toBe('wounded');
    })

    it('throw error if has no name', () => {
        expect(() => getHealth({ name: '', health: 49 })).toThrow('Wrong name');
    })

    it('throw error if name is not type of string', () => {
        expect(() => getHealth({ name: {}, health: 49 })).toThrow('Wrong name');
    })

    it('throw error if health is not type of number', () => {
        expect(() => getHealth({ name: 'test', health: '49' })).toThrow('Health should be type of number');
    })
})