import * as React from 'react';

export const Thing1 = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button type="button" {...props} />
);
