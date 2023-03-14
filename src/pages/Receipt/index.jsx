import Button from "../../components/Button";
import Nav from "../../components/Nav";
import styles from "./receipt.module.scss"
import barcode from "./assets/barcode.png";

const Receipt = () => {
    return (
        <div className={styles.receipt}>
            <Nav />
            <div className={styles.download}>
                <span>Pleasure Park</span>
                <Button text={'DOWNLOAD'}/>
            </div>
            <section className={styles.details}>
                <div>
                    <div className={styles.name}>
                        <p>JOHN DOE</p>
                        <span>081*****4567</span>
                    </div>
                    <div className={styles.reservation}>
                        <p>Reservation At:</p>
                        <span>PH Pleasure Park
                        1234 Aba Rd, Port Harcourt, RI</span>
                    </div>
                </div>
                <div className={styles.eventDetails}>
                    <div>
                        <p>SN</p>
                        <p>MENU</p>
                        <p>TICKETS</p>
                        <p>DATE</p>
                        <p>TIME</p>
                        <p>DURATION</p>
                    </div>
                    <div>
                        <p>1</p>
                        <p>CHESS</p>
                        <p>4 REGULAR</p>
                        <p>13TH</p>
                        <p>4 PM</p>
                        <p>2 HRs</p>
                    </div>
                    <div>
                        <p>2</p>
                        <p>ARCADE</p>
                        <p>4 REGULAR</p>
                        <p>13TH</p>
                        <p>1 PM</p>
                        <p>2 HRs</p>
                    </div>
                </div>
                <p className={styles.paid}>PAID: NGN 23,450</p>
                <div className={styles.specialrequest}>
                    <p>Special Request:</p>
                    <span>We plenty o, please provide enough space. Thanks</span>
                </div>
                <div className={styles.barcode}>
                    <img src={barcode} alt="barcode"/>
                    <span>P001234FY</span>
                </div>
            </section>   
        </div>
    )
}

export default Receipt;