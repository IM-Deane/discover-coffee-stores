import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

function Foo() {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.slug} | Caffeine Addicts</title>
			</Head>
			<div>Page {router.query.slug}</div>
		</div>
	);
}

export default Foo;
