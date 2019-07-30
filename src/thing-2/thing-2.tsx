/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 1rem;
`;

export const Thing2 = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <StyledButton type="button" {...props} />
);
