import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title : "Welcome from State",
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){
    const title = "Welcome!";
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}
