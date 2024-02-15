import {Pagination} from 'antd';
import React from 'react';

const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};
const Paginations = () => (
    <div>
        <Pagination
            total={500}
            defaultCurrent={1}
            itemRender={itemRender}
            style={{display: 'flex', justifyContent: 'center'}}
        />
    </div>
);
export default Paginations;
