import { NavLink } from "react-router-dom"

function Navbar() {
    const links = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Works", path: "/works" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <>
            <div className='w-[30%] h-full bg-white flex flex-col items-center pt-3'>
                {/* header section */}
                <div className=" flex flex-col items-center">
                    <div className="w-[100px] h-[100px] bg-blue-400 rounded-full mb-1">
                        <img src="" alt="" />
                    </div>
                    
                    <h1 className="text-[#5b79b1] font-semibold">Samuel Ndegwa</h1>
                </div>

                {/* Navlinks section */}
                <nav className=" text-blue-800 p-4">
                    <ul className="flex flex-col space-y-4 p-4 items-center ">
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-400 font-bold underline"
                                            : " hover:text-yellow-300"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar