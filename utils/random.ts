/**
 * generate random string
 *  see also: https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
 *
 * @param n count of letters
 * @returns e.g.: `kd7lw0p35o`
 */
export function random_alphanumeric(n: number): string {
  return Array.from(Array(n), () => Math.floor(Math.random() * 36).toString(36)).join('')
}
