import add from '@src/components/add';

describe('add test', () => {
    it('should add two numbers', () => {
        expect(add(1,2)).toBe(3);
    })
});