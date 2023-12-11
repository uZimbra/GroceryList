export function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomString = Math.random()
    .toString(36)
    .substring(2, 8)
    .replace(' ', '');
  const uniqueId = `${timestamp}${randomString}`;
  return uniqueId;
}
