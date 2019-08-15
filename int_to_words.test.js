const num_to_words = require('./int_to_words');


test('Should convert decimal 1 to One', () => {
    expect(num_to_words(1)).toBe(`One`);
});

test('Should convert decimal 2 to Two', () => {
    expect(num_to_words(2)).toBe(`Two`);
});

test('Should convert decimal 3 to Three', () => {
    expect(num_to_words(3)).toBe(`Three`);
});

test('Should convert decimal 20 to Twenty', () => {
    expect(num_to_words(20)).toBe(`Twenty`);
});

test('Should convert decimal 21 to Twenty One', () => {
    expect(num_to_words(21)).toBe(`Twenty One`);
});

test('Should convert decimal 30 to Thirty', () => {
    expect(num_to_words(30)).toBe(`Thirty`);
});

test('Should convert decimal 100 to One Hundred', () => {
    expect(num_to_words(100)).toBe(`One Hundred`);
});

test('Should convert decimal 101 to One Hundred and One', () => {
    expect(num_to_words(101)).toBe(`One Hundred and One`);
});

test('Should convert decimal 200 to Two Hundred', () => {
    expect(num_to_words(200)).toBe(`Two Hundred`);
});

test('Should convert decimal 999 to Nine Hundred and Ninety Nine', () => {
    expect(num_to_words(999)).toBe(`Nine Hundred and Ninety Nine`);
});

test('Should convert decimal 1000 to One Thousand', () => {
    expect(num_to_words(1000)).toBe(`One Thousand`);
});

test('Should convert decimal 1001 to One Thousand and One', () => {
    expect(num_to_words(1001)).toBe(`One Thousand and One`);
});

test('Should convert decimal 10456 to Ten Thousand Four Hundred and Fifty Six', () => {
    expect(num_to_words(10456)).toBe(`Ten Thousand Four Hundred and Fifty Six`);
});

test('Should convert decimal 100000 to One Hundred Thousand', () => {
    expect(num_to_words(100000)).toBe(`One Hundred Thousand`);
});

test('Should convert decimal 100849 to One Hundred Thousand Eight Hundred and Forty Nine', () => {
    expect(num_to_words(100849)).toBe(`One Hundred Thousand Eight Hundred and Forty Nine`);
});

test('Should convert decimal 987654 to Nine Hundred and Eighty Seven Thousand Six Hundred and Fifty Four', () => {
    expect(num_to_words(987654)).toBe(`Nine Hundred and Eighty Seven Thousand Six Hundred and Fifty Four`);
});

test('Should convert decimal 1000000 to One Million', () => {
    expect(num_to_words(1000000)).toBe(`One Million`);
});

test('Should convert decimal 1000001 to One Million and One', () => {
    expect(num_to_words(1000001)).toBe(`One Million and One`);
});

test('Should convert decimal 1760001 to One Million Seven Hundred and Sixty Thousand and One', () => {
    expect(num_to_words(1760001)).toBe(`One Million Seven Hundred and Sixty Thousand and One`);
});