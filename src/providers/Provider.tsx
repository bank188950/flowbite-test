import React from 'react';

function Provider({ children }: { children: React.ReactNode }): React.ReactElement {
  return <div>{children} 66666</div>;
}

export default Provider;
