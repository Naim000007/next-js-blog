import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
// import blogimg from "../../../public/blog.png"

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="#testid" className={styles.container} >
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/28830603/pexels-photo-28830603/free-photo-of-elegant-sunlit-arcaded-corridor-with-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="blog"
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog