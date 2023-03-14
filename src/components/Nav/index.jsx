import { Link } from "react-router-dom";
import styles from "./nav.module.scss";
import Button from "../Button";
import { ReactComponent as Hamburger} from "./assets/menu-hamburger.svg";
import { useState } from "react";

const Nav = () => {
    const [toggleNav, setToggleNav] = useState(false);
    console.log(toggleNav)
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <span>Pentria</span>
                <div>
                    <Link>LOGIN</Link>
                    <Link>
                        <Button bg={styles.button} text={'SIGN UP'} />
                    </Link>
                </div> 
                <Hamburger onClick={() => setToggleNav(!toggleNav)}/>
            </nav>
            <nav className={`${toggleNav ? styles.mobileNav : styles.activeMenu}`}>
                <div>
                    <Link>LOGIN</Link>
                    <Link>
                        <Button bg={styles.button} text={'SIGN UP'}/>
                    </Link>   
                </div>

            </nav>
        </header>
    )
}

export default Nav;