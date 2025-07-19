import { CiCloudSun, CiSearch, CiSettings, CiSun, CiUser } from "react-icons/ci";
import { MdCircleNotifications } from "react-icons/md";

const Header = () => {
    return (
        <>
            <header style={{ display: "flex" }} >
          
                <h1><CiSearch /></h1>
                <h1><CiCloudSun /></h1>
                <h1><CiSettings /></h1>
                <h1><MdCircleNotifications /></h1>
                <h1><CiUser /></h1>

        </header >
        </>
    )
}
export default Header;