const useMetamaskConnect = require('../dist/index.js');

test('useMetamaskConnect', () => {
    const value = useMetamaskConnect();
    expect(value).toBe('Hello from reactLib');
    }
)