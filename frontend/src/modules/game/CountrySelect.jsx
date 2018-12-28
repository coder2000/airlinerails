// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Select, Field, Control, Label,
} from 'bloomer';

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`;

export default function CountrySelect(onCountrySelected: Function) {
  return (
    <Query asyncMode query={GET_COUNTRIES}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Field>
            <Label>Country</Label>
            <Control>
              <Select onChange={onCountrySelected}>
                {data.countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </Control>
          </Field>
        );
      }}
    </Query>
  );
}
