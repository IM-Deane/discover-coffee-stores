import styles from "../styles/Banner.module.css";

function Banner(props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Caffeine</span>
				<span className={styles.title2}>Addicts</span>
			</h1>
			<p className={styles.subtitle}>Discover your local coffee shops!</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
}

export default Banner;
