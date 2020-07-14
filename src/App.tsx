import React from 'react';
import { useCurrentUserQuery } from './generated/graphql';

function App() {
  const { loading, error, data } = useCurrentUserQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <pre>
      <code>
        {JSON.stringify(data?.viewer, null, 4)}
      </code>
    </pre>
  );
}

export default App;
