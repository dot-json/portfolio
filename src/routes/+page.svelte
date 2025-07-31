<script lang="ts">
	import Header from '../components/Header.svelte';
	import Intro from '../components/Intro.svelte';

	type Language = {
		code: 'en' | 'hu';
		name: 'English' | 'Magyar';
	};

	let lang = $state<Language>({ code: 'en', name: 'English' });

	let currentLanguage = $derived(lang.code);
	export function changeLanguage(newLang: Language) {
		lang = newLang;
	}
</script>

<main class="container mx-auto flex max-w-4xl flex-col gap-8 px-4 sm:px-8">
	<Header {changeLanguage} {currentLanguage} />
	<Intro />
</main>
