import { useRouter } from "next/router";
import Link from "next/link";

function CoffeeStore() {
	const router = useRouter();
	return (
		<div>
			Coffee Store: {router.query.id}
			<Link href={"/"}>
				<a>Back to home</a>
			</Link>
		</div>
	);
}

export default CoffeeStore;
