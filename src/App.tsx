import React from 'react';
import { Button, Icon } from 'adui';

const App = () => (
  <div className="flex items-center justify-center h-48 bg-gray-200">
    <Button leftIcon="add">按钮</Button>
    <Icon icon={true ? 'adjust' : 'video-cam'} />
  </div>
);

export default App;
