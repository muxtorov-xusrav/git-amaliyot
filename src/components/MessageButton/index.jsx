import React from 'react';
import {Button, message} from 'antd';
const MessageButton = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.warning('Salom Kalava 😁😁✌️✌️');
    };
    return (
        <>
            {contextHolder}
            <Button type='primary' onClick={info}>
                Display normal message
            </Button>
        </>
    );
};
export default MessageButton;
