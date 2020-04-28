import getHealthStatus from '../health';

test('should return \'healthy\' health status', () => {
    const person = {name: 'Маг', health: 100};

    expect(getHealthStatus(person)).toBe('healthy');
});

test('should return \'wounded\' health status', () => {
    const person = {name: 'Маг', health: 35};

    expect(getHealthStatus(person)).toBe('wounded');
});

test('should return \'critical\' health status', () => {
    const person = {name: 'Маг', health: 10};

    expect(getHealthStatus(person)).toBe('critical');
});