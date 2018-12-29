/**
 * @flow
 * @relayHash 1ddde0a46cae6e9f57e7652a3943a228
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountrySelectQueryVariables = {||};
export type CountrySelectQueryResponse = {|
  +countries: ?$ReadOnlyArray<?{|
    +code: ?string,
    +name: ?string,
  |}>
|};
export type CountrySelectQuery = {|
  variables: CountrySelectQueryVariables,
  response: CountrySelectQueryResponse,
|};
*/


/*
query CountrySelectQuery {
  countries {
    code
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CountrySelectQuery",
  "id": null,
  "text": "query CountrySelectQuery {\n  countries {\n    code\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CountrySelectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": [
          v0,
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CountrySelectQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '741d00bc43c5777cfc06c7c46596315a';
module.exports = node;
