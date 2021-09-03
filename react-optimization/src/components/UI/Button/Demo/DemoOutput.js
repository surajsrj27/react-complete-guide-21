import React from 'react'

import Myparagraph from './Myparagraph';

const DemoOutput = props => {
    console.log('Demo Running!');
    return <Myparagraph>{props.show ? 'This is new' : ''}</Myparagraph>;
}

export default React.memo(DemoOutput);
