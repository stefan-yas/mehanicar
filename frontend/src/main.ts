import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		strapiApiUrl: 'http://localhost:5000/api'
	}
});

export default app;