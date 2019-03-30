import Link from 'next/link'
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15
}

const Header = (props) => (
  <div>
    <Link href="/">
      <Button style={linkStyle}>Home</Button>
    </Link>
    <Link href="/about">
      <Button style={linkStyle}>About</Button>
    </Link>
    {props.children}
  </div>
)

export default Header