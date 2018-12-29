// @flow

import * as React from 'react';
import { Select, Field, Control, Label } from 'bloomer';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../app';

const GET_COUNTRIES = graphql`
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
      <QueryRenderer
        query={GET_COUNTRIES}
        environment={environment}
        render={({ error, data }) => {
          if (!data) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <Field>
              <Label>Country</Label>
              <Control>
                <Select onChange={this.onChange} selected={code}>
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
      />
    );
  }
}
