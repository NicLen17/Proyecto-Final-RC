import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Tarjeta.css'

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm" className="tarjetasec">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form className="tarjetasecform">
                    <input
                        required
                        style={{maxWidth: "100%"}}
                        type="number"
                        min="0"
                        name="number"
                        placeholder="Numero de tarjeta"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input  
                        required
                        style={{maxWidth: "100%"}}
                        type="text"
                        name="name"
                        maxLength="19"
                        placeholder="Nombre del dueño"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        required
                        style={{maxWidth: "100%"}}
                        type="tel"
                        maxLength="4"
                        min="0"
                        name="expiry"
                        placeholder="Fecha de expiracion"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        required
                        style={{maxWidth: "100%"}}
                        type="tel"
                        name="cvc"
                        maxLength="3"
                        placeholder="Venvimiento"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </form>
            </div>
        );
    }
}