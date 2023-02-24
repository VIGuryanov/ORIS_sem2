import { Link } from "react-router-dom"
import '../styles/menuButton.css';

const MenuButton = (linkTo, buttonText) => {
    return(
        <Link className="msenuButton" to ={linkTo}>
            <button className="menuButton">
                {buttonText}
            </button>
        </Link>
    )
}

export default MenuButton