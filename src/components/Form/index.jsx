import React from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import {Divider, Table} from 'antd';
const {RangePicker} = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
];

const Forma = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            // gap: '10rem',
        }}>
        <Form
            {...formItemLayout}
            variant='filled'
            style={{
                maxWidth: 600,
            }}>
            <Form.Item
                label='Input'
                name='Input'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='InputNumber'
                name='InputNumber'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                label='TextArea'
                name='TextArea'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label='Mentions'
                name='Mentions'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <Mentions />
            </Form.Item>

            <Form.Item
                label='Select'
                name='Select'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <Select />
            </Form.Item>

            <Form.Item
                label='Cascader'
                name='Cascader'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <Cascader />
            </Form.Item>

            <Form.Item
                label='TreeSelect'
                name='TreeSelect'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <TreeSelect />
            </Form.Item>

            <Form.Item
                label='DatePicker'
                name='DatePicker'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <DatePicker />
            </Form.Item>

            <Form.Item
                label='RangePicker'
                name='RangePicker'
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}>
                <RangePicker />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>

        <div>
            <Divider>Middle size table</Divider>
            <Table columns={columns} dataSource={data} size='large' />
            <Divider>Small size table</Divider>
            <Table columns={columns} dataSource={data} size='parge' />
        </div>
    </div>
);
export default Forma;
