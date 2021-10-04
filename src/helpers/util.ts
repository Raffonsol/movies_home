/**
 * Returns date only assuming YYYY-MM-DD format
 * @param date full date in YYYY-MM-DD format
 */
export const getYearOnly: (date: string) => string = (date) => {
    return date.substr(0, 4);
}