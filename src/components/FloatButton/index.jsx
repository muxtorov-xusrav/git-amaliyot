import {CommentOutlined, CustomerServiceOutlined} from '@ant-design/icons';
import React, {useState} from 'react';

import {FloatButton, Switch} from 'antd';

const Floatbutton = () => {
    const [open, setOpen] = useState(true);
    const onChange = checked => {
        setOpen(checked);
    };
    return (
        <div>
            <FloatButton.Group
                trigger='hover'
                type='primary'
                style={{
                    right: 84,
                }}
                icon={<CustomerServiceOutlined />}>
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <FloatButton.Group
                open={open}
                trigger='click'
                style={{
                    right: 24,
                }}
                icon={<CustomerServiceOutlined />}>
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <Switch
                onChange={onChange}
                checked={open}
                style={{
                    margin: 16,
                }}
            />
        </div>
    );
};
export default Floatbutton;
