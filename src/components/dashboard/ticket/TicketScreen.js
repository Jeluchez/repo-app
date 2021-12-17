import { TikectList } from "./TikectList"

export const TicketScreen = () => {

    return (
        <div className='ticket__container'>
            <div className="ticket__header">

                <h2>Tickets</h2>

                <button type="button" className='ticket__button-add'>
                    <i className="mdi mdi-plus-circle"></i>
                </button>

                <div className="ticket__filter">
                    
                </div>
            </div>

            {/* tickte list or ticket grid */}
            <TikectList />

        </div>
    )
}
