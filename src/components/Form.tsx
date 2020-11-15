import React, { useState, ChangeEvent, FormEvent } from "react";

import "../styles/form.css";
import { Content, ActionProps } from "../interfaces/forms";

export default function FormGift(props : ActionProps) {
    const { GiveGift } = props;

    const [data, setData] = useState<Content>({
        giver: "",
        receiver: ""
    });

    const handleGift = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(data.giver && data.receiver) {
            GiveGift(data);
            setData({
                giver: "",
                receiver: ""
            });
        }
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { name , value } } = e;
        setData({
            ...data,
            [name] : value
        });
    }

    return (
        <form onSubmit={handleGift} className="form-container">
            <h2>Give away</h2>

            <div>
                <label 
                    htmlFor="giver-gift"
                >
                    Giver: 
                </label>
                <input 
                    name="giver" 
                    type="text"
                    className="input-gift" 
                    id="giver-gift"
                    aria-label="giver-input"
                    value={data.giver}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label 
                    htmlFor="receiver-gift"
                >
                    Receiver: 
                </label>
                <input 
                    name="receiver" 
                    type="text"
                    className="input-gift" 
                    id="receiver-gift" 
                    aria-label="receiver-input"
                    value={data.receiver}
                    onChange={handleChange}
                />
            </div>

            <input type="submit" value="Save donation" />
        </form>
    );
}