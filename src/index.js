/**
 * Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
 * of Title Case where all words start with a capital letter), it keeps original single quote
 * and hyphen in the word.
 *
 *   'management_companies' to 'Management Companies'
 *   'managementCompanies' to 'Management Companies'
 *   `hell's kitchen` to `Hell's Kitchen`
 *   `co-op` to `Co-op`
 *
 * @param {String} str
 * @returns {String}
 */
export default function toStartCaseStr(str) {
  return str
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, (str, $1, $2) => $1 + ' ' + $2)
    .replace(/(\s|^)(\w)/g, (str, $1, $2) => $1 + $2.toUpperCase());
}
