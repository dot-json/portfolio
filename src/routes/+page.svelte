<script lang="ts">
	import Header from '../components/Header.svelte';

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

<main class="container mx-auto max-w-3xl">
	<Header {changeLanguage} {currentLanguage} />
</main>
