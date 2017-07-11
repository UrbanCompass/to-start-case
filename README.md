# to-start-case
Convert a string to Start Case for human display purposes.

Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
of Title Case where all words start with a capital letter).
UNLIKE OTHER Start Case libraries, it keeps original single quote and hyphen in the word.

Here are some examples:
```
   'management_companies' -> 'Management Companies'
   'managementCompanies' -> 'Management Companies'
   `hell's kitchen` -> `Hell's Kitchen`
   `co-op` -> `Co-op`
```

## Installation
```
npm install --save to-start-case
```

## Usage
```js
import toStartCase from 'to-start-case';

toStartCase('Mangement_companies'); // 'Management Companies'
toStartCase(`hell's kitchen`); // `Hell's Kitchen`
```
