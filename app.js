const _ = require("lodash");

const items = [1, [2, [3, [4]]]]

const newItems = _.flatMapDeep(items);

console.log('newItems:', newItems); // newItems: [ 1, 2, 3, 4 ]