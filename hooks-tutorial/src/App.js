import React, { useState } from 'react';
import Info from './Info';
import Counter from './Counter';

const App = () => {
    const [visible, setVisible] = useState(false);
    return <Counter />;
};

export default App;
