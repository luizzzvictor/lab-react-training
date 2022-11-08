import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const creditCardStyle = { backgroundColor: `${props.bgColor}` };
  return (
    <div className="cartaoSingular" style={creditCardStyle}>
      <section className="logoCartao">{props.type}</section>
      <section className="numeroCartao">
        •••• •••• •••• {props.number[12]}
        {props.number[13]}
        {props.number[14]}
        {props.number[15]}
      </section>
      <section className="footerCartao">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </section>
    </div>
  );
}

export default CreditCard;
