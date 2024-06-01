// navbar component
import {Link} from '@tanstack/react-router'

function Navbar() {
    return (
        <div className="p-2 flex gap-2
        bg-gray-200 text-gray-900 font-semibold
        ">
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