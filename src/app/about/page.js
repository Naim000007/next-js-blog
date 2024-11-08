import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import aboutImg from "../../../public/about.jpeg"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={aboutImg}
                    fill={true}
                    alt=""
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        BrightPixel is a team of experts focused on helping businesses succeed with modern digital solutions. We specialize in web development, app creation, and data analysis. Our goal is to turn your ideas into powerful digital tools that make your work easier and help your business grow. At BrightPixel, we bring creativity and technology together to deliver results that matter.
                        <br />
                        <br />
                        We work closely with you to understand your goals and create custom solutions that fit your needs. From building user-friendly websites to developing powerful apps and making sense of your data, we’re here to support your business every step of the way. BrightPixel is all about turning challenges into opportunities and making technology work for you.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        At BrightPixel, we specialize in delivering top-notch digital services to help businesses thrive. Our expertise spans web development, where we create modern, user-friendly websites tailored to your brand; app development, building innovative mobile and web applications that engage and delight users; and data analysis, transforming complex data into actionable insights that drive smarter business decisions. Using the latest technology and creative solutions, we are dedicated to enhancing your operations, boosting customer engagement, and giving your business a competitive edge. Whatever your digital needs, BrightPixel is ready to make it happen.
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - data analysis
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;