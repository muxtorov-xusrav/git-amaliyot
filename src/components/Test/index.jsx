import {
    DeleteTwoTone,
    FastBackwardOutlined,
    PlusCircleTwoTone,
    SlidersTwoTone,
} from '@ant-design/icons';
import {Divider, Flex, Typography} from 'antd';
import React from 'react';

const {Title} = Typography;
const Test1 = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Flex
                style={{
                    justifyContent: 'space-evenly',
                    padding: '20px 0 20px 0',
                }}>
                <SlidersTwoTone style={{fontSize: '50px'}} />
                <PlusCircleTwoTone style={{fontSize: '50px'}} />
                <DeleteTwoTone style={{fontSize: '50px'}} />
                <Title
                    style={{fontSize: '30px', textAlign: 'end'}}
                    type='warning'
                    // code
                    // delete
                >
                    Test ant
                </Title>
            </Flex>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
            </p>
            <Divider plain>Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                Refert tamen, quo modo.
            </p>
            <Divider orientation='end' plain style={{paddingBottom: '10px'}}>
                Left Text
            </Divider>
        </div>
    );
};

export default Test1;
