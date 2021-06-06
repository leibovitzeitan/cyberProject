import React, { Component } from "react";
import Logo from "./Logo"

export default class Navbar extends Component {
  render() {
    const routes = [] 
    return (
      <div className='p-4'>
        <Logo wsize='w-24' hsize='h-24'></Logo>
      </div>
    );
  }
}
