import React, { useState, useEffect } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import ratesService from "../services/rates";

const Rates = props => {
  const [rate, setRate] = useState(1);
  const [amountSent, setAmountSent] = useState(0);
  const [amountReceived, setAmountReceived] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [fees, setFees] = useState(2.99);
  const [toPay, setToPay] = useState(2.99);

  useEffect(() => {
    let res = async () => {
      const result = await ratesService.rates();
      console.log(result);
      setRate(Number(result.GBP.toFixed(2)));
    };

    res();
  });

  const handleChange = e => {
    setAmountSent(e.target.value);
    setAmountReceived(Number((e.target.value * rate).toFixed(2)));
    setToPay(Number(e.target.value) + Number(fees));
  };

  const toDo = () => {
    if (localStorage.usertoken) {
      props.history.push(`/profile`);
    } else {
      props.history.push(`/login`);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2>How much would you like to send?</h2>
        <form>
          <label>You send</label>
          <input name="amountSent" value={amountSent} onChange={handleChange} />
          {fromCurrency}
          <br />
          <Form.Field>
            <label>They get</label> {""}
            {amountReceived} {toCurrency}
          </Form.Field>
          Our fees: {fees} {fromCurrency}
          <Form.Field>
            <label>Exchange Rate: 1 Euro = {rate} Pound</label>
          </Form.Field>
          <Form.Field>
            <label>
              Total to pay: {toPay} {fromCurrency}
            </label>
          </Form.Field>
          <Button type="submit" onClick={toDo}>
            Continue
          </Button>
        </form>
      </Grid.Column>
    </Grid>
  );
};

export default Rates;

//Use the top code where there is no Internet
/*
import React, { useState, useEffect } from "react";
import axios from "axios";

const Rates = props => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    let res = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://api.openrates.io/latest"
      );

      let response = result.data.rates.CAD;
      setAmount(response);
    };

    res();
  });

  return (
    <div>
      <h1>Your amount</h1>
      {amount}
    </div>
  );
};

export default Rates;

*/
