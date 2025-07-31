<script lang="ts">
	import Header from '../components/Header.svelte';
	import Intro from '../components/Intro.svelte';
	import Work from '../components/Work.svelte';
	import Education from '../components/Education.svelte';

	import { currentLanguage, changeLanguage } from '$lib/i18n.js';
	import { type LanguageCode } from '$lib/translations/index.js';

	function handleLanguageChange(langCode: LanguageCode) {
		changeLanguage(langCode);
	}
</script>

<main class="container mx-auto flex max-w-4xl flex-col gap-8 px-4 sm:px-8">
	<Header changeLanguage={handleLanguageChange} currentLanguage={$currentLanguage} />
	<Intro />
	<Work />
	<Education />
</main>
