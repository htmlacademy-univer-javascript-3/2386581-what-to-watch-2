const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export const formatRemainingTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor(
    (timeInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  );
  const seconds = Math.floor(timeInSeconds % SECONDS_IN_MINUTE);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (!hours) {
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
