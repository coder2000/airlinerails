// @flow

import * as React from 'react';
import { Standard } from '../navigation';

type Props = {
  children: React.Node,
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Standard />
      {children}
    </div>
  );
}
