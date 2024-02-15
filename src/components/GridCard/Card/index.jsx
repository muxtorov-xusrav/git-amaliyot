import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import React, {useState} from 'react';
import {Avatar, Card, Skeleton, Switch} from 'antd';
const {Meta} = Card;
const Gridcards = ({state}) => {
    const [loading, setLoading] = useState(state);
    const onChange = checked => {
        setLoading(!checked);
    };
    return (
        <>
            <Switch checked={!loading} onChange={onChange} />
            <Card
                style={{
                    width: 300,
                    marginTop: 16,
                }}
                loading={loading}>
                <Meta
                    avatar={
                        <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
                    }
                    title='Card title'
                    description='This is the description'
                />
            </Card>
            <Card
                style={{
                    width: 300,
                    marginTop: 16,
                }}
                actions={[
                    <SettingOutlined key='setting' />,
                    <EditOutlined key='edit' />,
                    <EllipsisOutlined key='ellipsis' />,
                ]}>
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
                        }
                        title='Card title'
                        description='This is the description'
                    />
                </Skeleton>
            </Card>
        </>
    );
};
export default Gridcards;
