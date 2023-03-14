import styles from "./login.module.scss";
import Nav from "../../components/Nav"
import { Link } from "react-router-dom";
import Button from "../../components/Button"
import InputField from "../../components/InputField"

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <Nav />
            <section className={styles.login}>
            <h2>Login to Pentria</h2>
            <label className={styles.email}>
                Email
                <InputField 
                type={"email"} 
                name={"email"} 
                placeholder={"Enter your email"}
                value={""}
                />
            </label>
            <label className={styles.password}>
                Password
                <InputField
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                value={""}
                />
            </label>
            <Link className={styles.forgotPassword}>Forgot your password?</Link>
            <Button bg={styles.signin} text={"SIGN IN"}/>
            <span>
                <div></div>
                <p>OR</p>
                <div></div>
            </span>
            <div className={styles.othersignin}>
                <Button bg={styles.button} text={"LOGIN WITH GOOGLE"}/>
                <Button bg={styles.button} text={"LOGIN WITH FACEBOOK"}/>
            </div>
        </section>
        </div>
    )
}

export default LoginPage;