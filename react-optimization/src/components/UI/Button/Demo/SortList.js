import React, { useMemo } from 'react'

const SortList = props => {
    const { title, items } = props;

    const sortedList = useMemo(() => {
        console.log('Items sorted');
        return items.sort((a, b) => a - b);
    }, [items]);
    console.log('DemoList Running');

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SortList;
