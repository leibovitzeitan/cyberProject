import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const routes = [] 
    return (
      <div>
        <h1>navbar?</h1>
        <ul className='p-0 m-0 overflow-hidden bg-gray-400 list-none'>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        {/* <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }

          li {
            float: left;
          }

          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }

          li a:hover:not(.active) {
            background-color: #111;
          }

          .active {
            background-color: #4caf50;
          }
        `}</style> */}
      </div>
    );
  }
}
