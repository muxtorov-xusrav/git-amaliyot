import React from 'react';
import {Col, Row} from 'antd';
import Gridcards from './Card';
const GridCard = () => (
    <>
        <Row className='grid-card'>
            <Col span={6} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Gridcards state={true} />
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Gridcards state={false} />
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Gridcards state={false} />
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Gridcards state={true} />
            </Col>
        </Row>
    </>
);
export default GridCard;
