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
        <Button type='primary' code>
            TEST Button
        </Button>
        <Button>TEST Button</Button>
        <Button type='dashed'>TEST Button</Button>
        <Button type='text'>TEST Button</Button>
        <Button type='link'>TEST Button</Button>
    </Flex>
);
export default App;
