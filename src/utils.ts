import { format, toZonedTime } from 'date-fns-tz';

export const fetchDate = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    const zonedDate = toZonedTime(date, 'UTC');
    return format(zonedDate, "MMMM d, yyyy 'at' hh:mm a");
};
