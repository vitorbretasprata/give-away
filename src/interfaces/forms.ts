export interface Content { 
    giver : string,
    receiver: string
}

export interface ActionProps {
    GiveGift : (dataValue : Content) => void
}