import HomeNavbar from "../../components/HomeNavbar";
import styles from "./aboutus.module.scss";
import aboutusImg from "./assets/aboutusImg.png";
import teamMember from "./assets/avatar.png";
import Footer from "../../components/Footer"

const Aboutus = () => {
    const explorables = [{}, {}, {}, {}, {}, {}, {}, {},];
    return (
        <div className={styles.aboutus}>
            <HomeNavbar />
            <section className={styles.aboutPentria}>
                <div>
                    <h1>One-click playtime, like never before!</h1>
                    <p>Pentria is Africa’s leading marketplace for all things recreation and leisure. A platform to relish good times and create beautiful memories through play and fun activities. Now you can more easily find and access your favorite games and events nearby. Don't be late or left out anymore. Book playtime ahead. Just a click.</p>
                    <span>App coming soon!</span>
                </div>
                <img src={aboutusImg} alt="A robot hand holding Iphone 12 pro max" />
            </section>
            <section className={styles.pentriaDetails}>
                <div className={styles.container}>
                <div className={styles.ourstory}>
                    <h2>OUR STORY</h2>
                    <span>
                        <p>In 2021, while running a public gaming lounge in Southwest Nigeria, Chidi Nkwocha (founder, Gamehauz Inc.), ran into two problems. Low visibility, one. Next, keen customers who couldn’t afford the luxury of waiting to use a facility were leaving, unhappy.</p>
                        <p> He conceived an idea. Why not create a seamless playtime experience in which public recreation facility users can eliminate waiting time with one-click ticket reservation at home, while also assisting recreation businesses in increasing visibility, boosting sales and improving customer retention?</p>
                        <p>And so, Pentria was born - a lovable product by a team of game, event and tech enthusiasts passionate about solving social and business development problems in Africa.</p>
                    </span>
                </div>
                <div className={styles.mission}>
                    <div>
                        <h2>OUR MISSION</h2>
                        <p>Pentria employs a multisectoral approach to identify and address real issues surrounding recreation, tourism and entertainment in Nigeria and Africa.</p>
                    </div>
                    <div>
                        <h2>OUR PROMISE</h2>
                        <p>Pentria is an easy-to-use digital marketplace to find and access the best quality, bespoke and pocket-friendly recreation and hospitality service providers in your locality. Enjoy:
                            <ul>
                                <li>Custom search results</li>
                                <li>Safe and comfy spaces</li>
                                <li>Exclusive prices</li>
                                <li>Simplified bookings</li>
                                <li>Secure online transactions</li>
                            </ul>
                        </p>
                    </div>
                </div>
                </div>
            </section>
            <section className={styles.team}>
                <h3>Meet the Team</h3>
                <div>
                    {explorables.map(() => {
                        return (
                            <div>
                                <img src={teamMember} alt="Team member image" />
                                <h4>John Doe</h4>
                                <p>Co-Founder & COO</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer bg={styles.footer} purple={true}/>
        </div>

    )
}

export default Aboutus