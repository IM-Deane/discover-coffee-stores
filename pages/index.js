import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner";

export default function Home() {
	const handleOnBannerBtnClick = () => {
		console.log("hi banner button");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Caffeine Addicts</title>
				<meta
					name="description"
					content="Caffeine Addicts is a coffee shop directory for Edmonton, Alberta."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
			</main>
		</div>
	);
}
