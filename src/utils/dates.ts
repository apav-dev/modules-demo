export function timeAgo(dateTimeStr: string): string {
  // Parse the input date-time string
  const inputDate = new Date(dateTimeStr);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = currentDate.getTime() - inputDate.getTime();

  // Convert milliseconds to hours
  const hours = difference / (1000 * 60 * 60);

  if (hours < 24) {
    // Return the difference in hours if less than 24 hours
    return `${Math.floor(hours)} hours ago`;
  } else {
    // Convert hours to days for differences of 24 hours or more
    const days = hours / 24;
    return `${Math.floor(days)} days ago`;
  }
}
