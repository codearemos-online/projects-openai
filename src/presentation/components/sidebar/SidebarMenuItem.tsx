import { NavLink } from "react-router-dom"
import { menuRoutes } from "../../router/router"

type props = {
    to:string,
    icon:string,
    description:string,
    title:string
}

export const SidebarMenuItem = (option:props) => {

    return <NavLink
        key={option.to}
        to={option.to}
        className={({ isActive }) =>
            isActive
                ? 'flex justify-center items-center bg-gray-600 rounded-md p-2 transition-colors'
                : 'flex justify-center items-center hover:bg-gray-600 rounded-md p-2 transition-colors'
        }
    >
        <i className={`${option.icon} text-2xl mr-4 text-indigo-400`}></i>
        <div className="flex flex-col flex-grow">
            <div className="text-white text-lg font-semibold">
                {option.title}
            </div>
            <div className="text-sm text-gray-500">{option.description}</div>
        </div>
    </NavLink>

}