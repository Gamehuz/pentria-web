import styles from './explore.module.scss';
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { ReactComponent as Star} from "../../assets/star.svg";
import { ReactComponent as NoStar} from "../../assets/no-star.svg";
import homepageImg from "../../assets/homepageImg.png";
import Button from '../../../../components/Button';
import {useState} from "react";

const Explore = () => {
    const explorables = [{}, {}, {}];
    const [rating, setRatings] = useState(4);
    const noRating = 5 - rating;

    // const ratedStar = () => {
    //     for (let i=0; i <= 4; i++) {
    //         return (
    //             <Star />
    //         )
    //     }
    // }

    // const noratedStar = () => {

    // }
    return (
        <section className={styles.explore}>
            <span>
                <div></div>
                EXPLORE
            </span>
            <div className={styles.exploreHeader}>
                <h2>Spaces to Go</h2>
                <span>Explore All</span>
            </div>
            <div className={styles.arrows}>
                    <LeftArrow />
                    <RightArrow />
                </div>
            <div className={styles.spaces}>
                <LeftArrow className={styles.desktopLArrow}/>
                {
                    explorables.map((spaces, index) => {
                        return (
                            <article key={index}>
                                <img src={homepageImg} alt="spaces arena"/>
                                <span><p>$2000</p>/hr</span>
                                <h3>Platinum Game Center & Bar</h3>
                                <p>Rumuol, Poort harcourt road inside brogdgr</p>
                                <div>
                                    <div>
                                        <div>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <NoStar />
                                        </div>
                                        <p>4.0 Ratings</p>
                                    </div>
                                    <Button type={'button'} text={'GET TICKET'}/>
                                </div>
                            </article>
                        )
                    })
                }
                <RightArrow className={styles.desktopRArrow}/>
            </div>
            <div className={styles.upcoming}>
                <span>Upcoming Events</span>
                <div className={styles.arrows}>
                    <LeftArrow />
                    <RightArrow />
                </div>
                <div>
                    <LeftArrow className={styles.desktopLArrow} />
                    {
                        explorables.map((spaces, index) => {
                            return (
                                <article key={index}>
                                    <img src={homepageImg} alt="spaces arena"/>
                                    <span><p>$2000</p>/hr</span>
                                    <h3>Frontend dev games</h3>
                                    <p>Rumuol, Poort harcourt road inside brogdgr</p>
                                    <div>
                                        <div>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <NoStar />
                                        </div>
                                        <div className={styles.eventDate}>
                                        <span>Jan 29, 2023</span>
                                        <p>7:15pm</p>
                                        </div>
                                        <Button className={styles.button} type={'button'} text={'GET TICKET'}/>
                                    </div>
                                </article>
                            )
                        })
                    }
                    <RightArrow className={styles.desktopRArrow} />             
                </div>

            </div>

        </section>
    )
}

export default Explore;