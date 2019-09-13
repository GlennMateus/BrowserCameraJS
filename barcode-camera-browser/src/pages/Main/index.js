import React, { Component } from "react";
import { apimp } from "../../services/api";

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await apimp.get(
      "categorias?local=6gkzqf9vb&termo=miojo&raio=2"
    );
    let { categorias } = response.data;
    console.log("response: ", categorias);
  };

  render() {
    return <h1>Hello world</h1>;
  }
}
