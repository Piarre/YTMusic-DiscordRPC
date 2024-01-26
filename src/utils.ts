const convertToMilliseconds = (timeFormat: string): number => {
  const [minutesStr, secondsStr] = timeFormat.split(":");

  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);

  const totalMilliseconds = (minutes * 60 + seconds) * 1000;

  return totalMilliseconds;
};

const calculateTimestamps = (
  currentTime: string,
  maxTime: string
): { startTime: number; endTime: number } => {
  const currentTimestamp = convertToMilliseconds(currentTime);
  const maxTimestamp = convertToMilliseconds(maxTime);

  const startTime = Date.now() - currentTimestamp;
  const endTime = Date.now() + (maxTimestamp - currentTimestamp);

  return { startTime, endTime };
};

export { calculateTimestamps };
