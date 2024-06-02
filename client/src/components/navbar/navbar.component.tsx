// navbar component
import {Link} from '@tanstack/react-router'
import logo from '@/assets/logo/logo.jpg'


function Navbar() {
  return (
      <div className="p-2 flex gap-2 items-center
        bg-blue-100 text-gray-900 font-semibold
        ">

        <img src={logo} alt="logo" className="w-8 h-8"/>
        <span>PDF Converter |</span>

        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/convert/pdf" className="[&.active]:font-bold">
          Convert PDF
        </Link>
        <Link to="/docs" className="[&.active]:font-bold">
          Docs
        </Link>

      </div>
  )
}

export default Navbar