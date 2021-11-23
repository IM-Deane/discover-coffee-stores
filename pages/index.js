import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner";
import Card from "../components/Card";

import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
	return {
		// will be passed to the page component as props
		props: {
			coffeeStores: coffeeStoresData,
		},
	};
}

export default function Home(props) {
	const handleOnBannerBtnClick = () => {
		console.log("hi from the banner button");
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
				<header className={styles.mainHeader}>
					<Banner
						buttonText="View stores nearby"
						handleOnClick={handleOnBannerBtnClick}
					/>
					<div className={styles.heroImage}>
						<Image
							src="/static/hero-img.png"
							width={700}
							height={400}
							alt="Caffeine Addicts landing picture"
						/>
					</div>
				</header>
				<h2 className={styles.heading2}>Edmonton Coffee Shops</h2>
				{props.coffeeStores.length > 0 ? (
					<div className={styles.cardLayout}>
						{props.coffeeStores.map((store, idx) => (
							<Card
								key={store.id}
								className={styles.card}
								name={store.name}
								href={`/coffee-store/${store.id}`}
								imgUrl={store.imgUrl}
							/>
						))}
					</div>
				) : (
					<p>No shops found!</p>
				)}
			</main>
		</div>
	);
}
