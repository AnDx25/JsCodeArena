/**TC : O(3^n)
 *
 * @param {*} ropeLength
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
const maxPieces = (ropeLength, a, b, c) => {
  if (ropeLength === 0) {
    return 0;
  }
  if (ropeLength < 0) {
    return -1;
  }
  const result = Math.max(
    maxPieces(ropeLength - a, a, b, c),
    maxPieces(ropeLength - b, a, b, c),
    maxPieces(ropeLength - c, a, b, c)
  );
  /**Here ensuring if for a case maximum value is -ve then no need to further add i to it because
   * that will results to zero and zero to 1 and so on
   * So for -ve maximum value just return -1 so as to know that with this requirement rope can not be cut
   *
   */
  return result < 0 ? -1 : 1 + result;
};

export default maxPieces;
