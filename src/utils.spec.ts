import { fetchDate } from './utils';

describe('fetchDate', () => {
    it('formats the date correctly', () => {
        const dateString = '2024-02-08T20:42:54.387Z';
        const expectedFormattedDate = 'February 8, 2024 at 08:42 PM';

        const formattedDate = fetchDate(dateString);

        expect(formattedDate).toBe(expectedFormattedDate);
    });

    it('handles invalid date strings gracefully', () => {
        const invalidDateString = 'invalid-date';
        const formattedDate = fetchDate(invalidDateString);

        expect(formattedDate).toBe('Invalid Date');
    });

    it('formats a date string without time component', () => {
        const dateString = '2024-02-08';
        const expectedFormattedDate = 'February 8, 2024 at 12:00 AM'; // UTC time

        const formattedDate = fetchDate(dateString);

        expect(formattedDate).toBe(expectedFormattedDate);
    });
});
