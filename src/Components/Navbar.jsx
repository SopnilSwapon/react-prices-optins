import { useState } from "react";
import Link from "./Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
      
    return (
        <div>
             <div className="md:hidden text-3xl bg-gray-400  p-2" onClick={() =>setOpen(!open)}>
               { open === true ?<IoCloseSharp></IoCloseSharp>  : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>} 
            </div>
            
            <ul className={`md:flex text-4xl bg-yellow-300 p-3 absolute md:static font-bold text-white 
            ${ open ? 'top-11 duration-1000' : '-top-60 duration-500'}` }
            >
           
            {
                routes.map(route => <Link 
                    key={route.id}
                    route = {route}
                ></Link>)
            }
            </ul>
        </div>
    );
};

export default Navbar;