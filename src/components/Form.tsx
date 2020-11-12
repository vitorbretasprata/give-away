import React, { useState, ChangeEvent } from "react";

import { Content, ActionProps } from "../interfaces/forms";

export default function FormGift(props : ActionProps) {
    const { GiveGift } = props;

    const [data, setData] = useState<Content>({
        giver: "",
        receiver: ""
    });

    const handleGift = () => GiveGift(data);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { name , value } } = e;
        setData({
            ...data,
            [name] : value
        });
    }

    return (
        <form onSubmit={handleGift} className="form-container">
            <div>
                <label 
                    htmlFor="giver-gift"
                >
                    Giver: 
                </label>
                <input 
                    name="giver-gift" 
                    className="input-gift" 
                    id="giver-gift"
                    value={data.giver}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label 
                    htmlFor="receiver-gift"
                >
                    Giver: 
                </label>
                <input 
                    name="receiver-gift" 
                    className="input-gift" 
                    id="receiver-gift" 
                    value={data.receiver}
                    onChange={handleChange}
                />
            </div>

            <input type="submit" value="Save donation"/>
        </form>
    );
}