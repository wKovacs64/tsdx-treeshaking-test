/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';

export const Thing2 = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button type="button" css={{ padding: '1rem' }} {...props} />
);
