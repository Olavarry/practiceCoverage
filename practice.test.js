const parseWord = require ('./practice');

describe('test', () => {
    test('should return first char, num of diff char between,and last char', () =>{
        const expected = 'S3h'
        const result = parseWord('Smooth')
        expect(expected).toEqual(result)
    })

    test('should validate string with same characters', () =>{
        const expected = 't1t'
        const result = parseWord('ttttttt')
        expect(expected).toEqual(result)
    })

    test('should validate long string', () =>{
        const expected = 'w21o'
        const result = parseWord('wjdjbdkjjhxzqpbdnbbbbbbbbbbhhhhhhhgggggffffddddddweerytjhuyjuyjyiujgbfgvdfvfdvckjjdbjkdbfjkdfbo')
        expect(expected).toEqual(result)
    })

    test('should return 0 when no characters between first and last characters', () =>{
        const expected = 'O0a'
        const result = parseWord('Oa')
        expect(expected).toEqual(result)
    })

    test('should print empty when empty string is given ', () =>{
        const expected = 'string is empty or contains non-alphabetic characters'
        const result = parseWord('')
        expect(expected).toEqual(result)
    })

    test('should print message when string contains numbers', () =>{
        const expected = 'string is empty or contains non-alphabetic characters'
        const result = parseWord('es342i')
        expect(expected).toEqual(result)
    })

    test('should print message when string contains non-alphabethic characters', () =>{
        const expected = 'string is empty or contains non-alphabetic characters'
        const result = parseWord('es342i#$/()/(')
        expect(expected).toEqual(result)
    })
})
