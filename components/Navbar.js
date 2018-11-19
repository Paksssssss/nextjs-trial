import React from 'react';
import Link from 'next/link'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <div>
          <Link href='/'>
            <a title="Admin Home">Home</a>
          </Link>
          <Link href="/about">
            <a title="About">About</a>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar