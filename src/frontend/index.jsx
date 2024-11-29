import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  const [pageId, setPageId] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);
  useEffect(() => {
    invoke('getPageId', { example: 'my-page-id' }).then(setPageId);
  }, []);
  return (
    <>
      <Text>Hello world!</Text>
      <Text>Welcome {data ? data : 'Loading...'}</Text>
      <Text>Page object: {pageId ? pageId : 'Loading...'}.</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
