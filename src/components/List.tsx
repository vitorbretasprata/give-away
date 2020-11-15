import React from 'react';

import "../styles/list.css";

import { Content } from "../interfaces/forms";

interface ListProps {
    ListContent: Array<Content>
}

function List(props : ListProps) {    

    if(props.ListContent.length === 0) {
        return (
            <div className="empty-list">
                <h2>There is no products on the list.</h2>
            </div>
        );
    }

    return (
        <div className="list-component">
            {props.ListContent.map(content => (
                <div key={(props.ListContent.length + 1).toString()} className="content-container">
                    <p>
                        Giver: <span>{content.giver}</span>
                    </p>

                    <p>
                        Receiver: <span>{content.receiver}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default List;
