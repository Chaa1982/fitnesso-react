import './header.css';
import { IoIosCart } from "react-icons/io";

export const Header = () => {
    return (
        <header className="header">
            <div className={'img'}></div>
            <menu>
                <a href="#">About</a>
                <a href="#">Free Workouts</a>
                <a href="#">Shop</a>
                <button>book a call</button>
                <IoIosCart size={'17px'}/>
                

            </menu>
        </header>
    )
}