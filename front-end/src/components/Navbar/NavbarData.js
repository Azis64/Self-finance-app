import {AiOutlineHome} from "react-icons/ai"
import {GrTransaction} from "react-icons/gr"
const NavbarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiOutlineHome/>,
        cName: "nav-Text",
    },{
        title: "Transactions",
        path: "/transactions",
        icon:<GrTransaction/>,
        cName: "nav-Text",
    }
]

export default NavbarData;