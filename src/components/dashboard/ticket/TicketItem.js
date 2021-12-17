import { Switch } from 'antd';

export const TicketItem = () => {


    function handleOnChange(checked) {
        console.log(`switch to ${checked}`);
    }

    return (
        <div className="ticket__item">

            <button className="ticket__item-btn-options">
                <i className="mdi mdi-settings-helper mdi-24px mdi-rotate-90"></i>
            </button>

            <div className="ticket__item-content">
                <p>N° 001</p>
                <p>Nombre <span>Lina Maria</span></p>
                <p>Fecha <span>06/10/2021</span></p>
                <p>Can pasajeros <span>2</span></p>
                <p>Destiono <span>Bocana</span></p>
                <p>Av Ballena <span>Si</span></p>
                <p>Valor Final <span>$ 157.000</span></p>
                <p>Status Ida <span><Switch size="small"  onChange={handleOnChange} /></span></p>
                <p>Status Venida <span><Switch size="small"  onChange={handleOnChange} /></span></p>
            </div>

        </div>
    )
}
