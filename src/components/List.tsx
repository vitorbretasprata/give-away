import React, { useEffect } from 'react';
import { Content } from "../interfaces/forms";

interface ListProps {
    ListContent: Array<Content>
}

function List(props : ListProps) {    

    if(props.ListContent.length === 0) {
        return (
            <div className="empty-list">
                <h2>There are no products to donate.</h2>
            </div>
        );
    }

    return (
        <div className="list-component">
            {props.ListContent.map(content => (
                <div>
                    
                </div>
            ))}
        </div>
    );
}

export default List;
