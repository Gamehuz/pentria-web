import Nav from "../../components/Nav";
import styles from "./payment.module.scss";
import { ReactComponent as MapPin } from "./assets/map-pin.svg"
import Button from "../../components/Button";

const Payment = () => {
    return (
        <div className={styles.payment}>
            <Nav />
            <section className={styles.paymentDetails}>
                <h1>Booking Details</h1>
                <h2>PLEASURE PARK</h2>
                <span className={styles.address}>
                    <MapPin />
                    <p>44 Adeleke Adekeye Cr, Powerline, Rumuokoro, PH</p>
                </span>
                    <span className={styles.detailsheader}>
                        <div></div>
                        <h3>CUSTOMER DETAILS</h3>
                    </span>
                    <div className={styles.details}>
                        <div className={styles.nameandPhone}>
                            <div>
                                <p>NAME</p>
                                <span>John Doe</span>
                            </div>
                            <div>
                                <p>PHONE</p>
                                <span>081*****4567</span>
                            </div>
                        </div>
                        <div className={styles.specialrequest}>
                            <p>Special Request:</p>
                            <span>We are plenty o, please provide enough space. Thanks</span>
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
                            <p>ARCADE</p>
                            <p>2 REGULAR</p>
                            <p>13TH AUG</p>
                            <p>1PM</p>
                            <p>2 HRs</p>
                        </div>
                        <div>
                            <p>2</p>
                            <p>BOAT RIDE</p>
                            <p>4 REGULAR</p>
                            <p>13TH AUG</p>
                            <p>3PM</p>
                            <p>15 MINs</p>
                        </div>                       
                    </div>
                    <div className={styles.totalanddiscount}>
                        <span className={styles.subtotal}>SUB-TOTAL - 6000</span>
                        <span className={styles.discount}>DISCOUNT - 2%</span>    
                    </div>
                    <div className={styles.total}>
                        <p>TOTAL</p>
                        <p>5940</p>
                    </div>
                    <Button bg={styles.button} text={"CONFIRM"}/>
            </section>
        </div>
    )
}

export default Payment;