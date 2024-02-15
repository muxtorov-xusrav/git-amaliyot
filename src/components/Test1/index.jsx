import React from 'react';
import {Button, Card, Flex, Typography} from 'antd';
const cardStyle = {
    width: 620,
};
const imgStyle = {
    display: 'block',
    width: 273,
};
const Card1 = () => (
    <Card
        hoverable
        style={cardStyle}
        styles={{
            body: {
                padding: 0,
                overflow: 'hidden',
            },
        }}>
        <Flex justify='space-between'>
            <img
                alt='avatar'
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                style={imgStyle}
            />
            <Flex
                vertical
                align='flex-end'
                justify='space-between'
                style={{
                    padding: 32,
                }}>
                <Typography.Title level={2}>
                    Kelajakni biz bilan yarating Codemy Academy!!!
                </Typography.Title>
                <Button type='primary' href='https://codemy.uz' target='_blank'>
                    Get Started
                </Button>
            </Flex>
        </Flex>
    </Card>
);
export default Card1;
