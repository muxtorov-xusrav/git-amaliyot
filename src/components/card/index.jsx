import React from 'react';
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
const {Meta} = Card;

const items = [1, 2, 3];

const App = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)'}}>
            {items.map((item, index) => {
                return (
                    <Card
                        key={index + 1}
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img src='https://codemy.uz/static/media/CodemyLogo2.2e01db6870e7a78449d8.png' />
                        }
                        actions={[
                            <SettingOutlined key='setting' />,
                            <EditOutlined key='edit' />,
                            <EllipsisOutlined key='ellipsis' />,
                        ]}>
                        <Meta
                            avatar={
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
                            }
                            title={`Title ${item}`}
                            description='Description 123'
                        />
                    </Card>
                );
            })}
        </div>
    );
};
export default App;
