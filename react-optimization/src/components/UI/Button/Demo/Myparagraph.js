import React from 'react'

const Myparagraph = props => {
    console.log('Myparagraph Running!');
    return <p>{props.children}</p>;
}

export default Myparagraph
