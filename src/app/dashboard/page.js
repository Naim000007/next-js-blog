"use client"
import useSWR from "swr";
import styles from "./page.module.css";

const Dashboard = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

    if (error) return <div className={styles.container}>Failed to load</div>;
    if (!data) return <div className={styles.container}>Loading...</div>;
    console.log(data);


    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
