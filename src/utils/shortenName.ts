export function shortenName(fullName: string): string {
  const names = fullName.split(" ");
  return `${names[0][0]}. ${names[names.length - 1]}`;
}
