import { format, parseISO } from 'date-fns';

export const formatDateFromISOString = (dateString: string, formatString: string) => {
    const date = parseISO(dateString);
    const formatted = format(date, formatString);
    return formatted;
}
