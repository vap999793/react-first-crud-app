import { Link } from 'react-router-dom';

const Navigation = () => {

  const text_color_style = {
    'color': 'blue'
  }
  return (
    <>

      <nav className="container mx-auto flex items-center justify-between py-4 px-11">
        <Link to="/" className="flex">
          <img style={{ height: 35 }} src="./logo192.png" alt="logo" />
          <span className='py-1 mx-2'>Crud-app</span>
        </Link>
        <ul className="flex items-center" style={text_color_style}>
          <li className='hover:text-blue-800 hover:font-bold'><Link to="/">Home</Link></li>
          <li className="ml-6 hover:text-blue-800 hover:font-bold"><Link to="/about">About</Link></li>
          <li className="ml-6 hover:text-blue-800 hover:font-bold"><Link to="/add-product">Add Product</Link></li>
        </ul>
      </nav>

    </>
  )
}

export default Navigation;