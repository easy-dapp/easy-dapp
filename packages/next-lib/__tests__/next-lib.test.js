const useNext = require('../dist/index.js');

test('useNext', () => {
    const value = useNext();
    expect(value).toBe('next');
    }  
)