import React from 'react';
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Buttons from './components/button/index';
import {Layout, Menu, theme, Button, Tooltip, Watermark, Flex} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Test1 from './components/Test';
import Card1 from './components/Test1';
import Inp from './components/Serch';
import Forma from './components/Form';
import Progr from './components/Progr/indx';

import Cards from './components/card/index';
import FloatButton from './components/FloatButton';
import GridCard from './components/GridCard';
import MyCalendar from './components/Calendar';
import QRcode from './components/QRcode';
import MessageButton from './components/MessageButton';
import Paginations from './components/pagination';
import About from './components/About';

const {Header, Content, Sider} = Layout;
const items1 = ['5', '8', '4', '22', '8', '8'].map(item => ({
    item,
    label: `Lorem ${item}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `qqqqqq${key}`,
            icon: React.createElement(icon),
            label: `wwwwwww ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `est${subKey}`,
                };
            }),
        };
    },
);
const App = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <img src='../public/logo.svg' width={100} />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <Button type='primary' size='large' icon={<SearchOutlined />}>
                    search
                </Button>
            </Header>
            <Layout style={{height: 'calc(100vh - 65px)'}}>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}>
                    <About />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <Cards />
                        <br />
                        <Paginations />
                        <Buttons />
                        <br />
                        <Test1 />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}>
                            <Card1 />
                            <Inp />
                        </div>
                        <Watermark content='Bexruz_M'>
                            <br />
                            <Forma />
                            <div style={{height: 100}} />
                            <Progr />
                        </Watermark>
                        <FloatButton />
                        <GridCard />
                        <Flex
                            style={{marginTop: '50px'}}
                            justify='space-around'>
                            <MyCalendar />
                            <QRcode />
                        </Flex>
                        <Flex justify='center' style={{marginTop: '50px'}}>
                            <MessageButton />
                        </Flex>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;
