import { BiSearchAlt } from "react-icons/bi";
import Container from '../container/Container'
import logo from '../../images/logo-removebg-preview.png'
import './Nav.css'

const Nav = ({search, setSearch}) => {

  return (
    <nav className="nav">
      <Container>
        <div className="nav_content">
            <img src={logo} alt="logo" className="nav_logo" />
            <form className='nav_search_form'>
                <input type="text" placeholder='Enter product name...' className='nav_search_input' />
                <BiSearchAlt />
            </form>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
