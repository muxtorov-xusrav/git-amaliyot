import React from 'react';
import {Button, Flex} from 'antd';
const App = () => (
    <Flex
        gap='small'
        wrap='wrap'
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '3%',
        }}>
        <Button type='primary'>dddddd Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>ddddd Button</Button>
        <Button type='text'>ssss Button</Button>
        <Button type='link' code>
            aaaa Button
        </Button>
    </Flex>
);
export default App;
