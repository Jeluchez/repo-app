import { TicketItem } from "./TicketItem"

export const TikectList = () => {
    
    const itemsList = [...Array(10).keys()]
    return (
        <div className="ticket__list">
        {
            itemsList.map(i =>(
                <TicketItem/>
            ))

        }
        </div>
    )
}
