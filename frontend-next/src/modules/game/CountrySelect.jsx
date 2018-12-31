// @flow

import * as React from 'react';
import { Select, Field, Control, Label } from 'bloomer';
import { Query } from 'react-apollo';
import { gql } from 'graphql-tag';

const GET_COUNTRIES = gql`
  query CountrySelectQuery {
    countries {
      code
      name
    }
  }
`;

type Props = {
  onCountrySelected: (code: string) => void,
};

type State = {
  code: string,
};

export default class CountrySelect extends React.Component<Props, State> {
  state = {
    code: '',
  };

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { onCountrySelected } = this.props;

    onCountrySelected(event.currentTarget.value);
    this.setState({ code: event.currentTarget.value });
  };

  render() {
    const { code } = this.state;

    return (
      <Query query={GET_COUNTRIES}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <Field>
              <Label>Country</Label>
              <Control>
                <Select onChange={this.onChange} selected={code}>
                  {data.countries.map(country => (
                    <option value={country.code}>{country.name}</option>
                  ))}
                </Select>
              </Control>
            </Field>
          );
        }}
      </Query>
    );
  }
}
