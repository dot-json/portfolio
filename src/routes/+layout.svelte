<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	import Reveal from '../components/Reveal.svelte';
	import Header from '../components/Header.svelte';

	import { currentLanguage, changeLanguage } from '$lib/i18n.js';
	import { type LanguageCode } from '$lib/translations/index.js';

	function handleLanguageChange(langCode: LanguageCode) {
		changeLanguage(langCode);
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition || window.innerWidth < 640) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <Reveal /> -->

<main class="container mx-auto flex max-w-4xl flex-col gap-8 p-4 sm:p-8">
	<Header changeLanguage={handleLanguageChange} currentLanguage={$currentLanguage} />
	{@render children()}
	<footer class="grid h-12 place-items-center">
		<p class="text-sm text-zinc-500">© 2025 Portfolio</p>
	</footer>
</main>

<style>
	:global(::selection) {
		background-color: var(--color-surface-border);
		color: var(--color-surface-text);
	}
</style>
