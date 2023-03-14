import Button from "../Button";
import InputField from "../InputField";
import styles from "./footer.module.scss";
import { Link }from "react-router-dom";
import { ReactComponent as Twitter } from "./assets/twitter.svg"
import { ReactComponent as WhiteTwitter } from "./assets/twitter.svg"
import { ReactComponent as WhiteLinkedin } from "./assets/twitter.svg"
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg"
import { ReactComponent as Youtube } from "./assets/youtube.svg"

// example bg for purple background = <Footer bg={styles.bg} purple={true}/>
// bg {
//     background-color: var(--secondary-color);
//     color: white;

//     p,
//     a,
//     h2 {
//         color: white !important;
//     }
// }



const Footer = ({ bg, purple }) => {
    return (
        <footer className={bg ? bg : styles.footer}>
            <div>
                <h2>Pentria</h2>
                <div className={styles.info}>
                    <span className={styles.subscribe}>Subscribe to our Newsletter</span>
                    <div className={styles.inputGroup}>
                        <InputField 
                        type={'text'} 
                        placeholder={'Enter your email'} 
                        value={''}  />
                        <Button type={'button'} bg={styles.button} text={'SUBSCRIBE'} />
                    </div>
                    <div className={styles.pageLinks}>
                        <div>
                            <span>About</span>
                            <Link to="aboutUs">About us</Link>
                            <Link to="blog">Blog</Link>
                            <Link to="contactUs">Contact us</Link>
                        </div>
                        <div>
                            <span>Legal</span>
                            <Link to="privacy-policy">Privacy Policy</Link>
                            <Link to="termsofuse">Terms of use</Link>
                        </div>
                        <div>
                            <span>Social</span>
                            <a>
                                {purple ? <WhiteTwitter /> : <Twitter />}
                                <p>Twitter</p>
                            </a>
                            <a>
                                {purple ? <WhiteLinkedin /> : <LinkedIn />}
                                <p>LinkedIn</p>
                            </a>
                            <a>
                                <Youtube />
                                <p>Youtube</p>
                            </a>
                        </div>
                    </div>
                    <span>© Copyright 2023 by Gamehauz, Inc. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;