import React from 'react'
import Link from 'next/link'

export default () => (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" href="/">Home</Link></li>
              <li><Link className="grey-text text-lighten-3" href="/about">About</Link></li>
              <li><Link className="grey-text text-lighten-3" href="/contact">Contact</Link></li>
              <li><a className="grey-text text-lighten-3" href="#!">Your cart</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2017 Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
)
