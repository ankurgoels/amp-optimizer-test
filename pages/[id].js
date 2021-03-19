export const config = { amp: true };

export default function AmpTest({ data }) {
	return (
		<div>
			<amp-img layout="fixed" src="https://picsum.photos/200" height="200" width="200" />
			<h1>{data.title}</h1>
			<h3>Completed: {data.completed ? "yes" : "no"} </h3>
		</div>
	)
}

export async function getStaticPaths() {
    return {
        // pre-fetching data
        paths: [],
        // Enable statically generating additional pages while the API is calling
        fallback: 'blocking',
    }
}


export async function getStaticProps({ params : { id } }) {
	const fetch = require("node-fetch");
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
	.then(response => response.json());
	

    // Pass data to the page via props
    return { props: { data : response } };
}