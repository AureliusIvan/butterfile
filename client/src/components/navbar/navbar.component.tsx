// navbar component
import {Link} from '@tanstack/react-router'
import logo from '@/assets/logo/logo.jpg'


function Navbar() {
  return (
      <div className="p-2 flex gap-2 items-center
        bg-gray-50
        shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        ">

        <img src={logo} alt="logo" className="w-8 h-8"/>

        <span>
          File Morph |
        </span>

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

        <a
            target={'_blank'}
            href="https://github.com/AureliusIvan/django-file-converter.git"
            className="[&.active]:font-bold">
          Github Repo
        </a>
      </div>
  )
}

export default Navbar