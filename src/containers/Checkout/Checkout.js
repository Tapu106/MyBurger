import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] == "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  CheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  CheckoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          oncheckoutCancelled={this.CheckoutCancelledHandler}
          oncheckoutContinued={this.CheckoutContinuedHandler}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          render={(props) => {
            return (
              <ContactData
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                {...props}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default Checkout;