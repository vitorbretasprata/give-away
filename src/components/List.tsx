import React from 'react';

interface ListProps {
    ListContent: Array<Content>
}

interface Content {
    Item: string
}

function List(props : ListProps) {

    if(props.ListContent.length === 0) {
        return (
            <div className="empty-list">
                <h2>List is empty</h2>
            </div>
        );
    }

    return (
        <div className="list-component">
            {props.ListContent.map(content => (
                <p key={props.ListContent.length.toString() + 1}>{content.Item}</p>
            ))}
        </div>
    );
}

export default List;
