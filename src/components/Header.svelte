<script lang="ts">
	import { t } from '$lib/i18n.js';
	import { languages, type LanguageCode } from '$lib/translations/index.js';

	const { changeLanguage, currentLanguage } = $props<{
		changeLanguage: (langCode: LanguageCode) => void;
		currentLanguage: LanguageCode;
	}>();
</script>

<header
	class="sticky top-4 z-[771] flex h-16 items-center justify-between rounded-2xl border border-surface-border/50 bg-surface-accent/25 px-4 backdrop-blur-lg"
>
	<h1 class="text-2xl font-semibold">{$t.header.title}</h1>
	<div class="flex">
		{#each languages as lang}
			<button
				class="relative cursor-pointer rounded p-1.5 hover:[&>span]:opacity-100"
				onclick={() => changeLanguage(lang.code)}
			>
				<img
					src={`/icons/${lang.code}.svg`}
					alt={lang.name}
					class="inline-block h-6 w-6 transition-opacity"
					style={`opacity: ${currentLanguage === lang.code ? 1 : 0.5};`}
				/>
				<span
					class="absolute top-full left-1/2 -translate-x-1/2 rounded-lg border border-surface-border/50 bg-surface-accent px-1.5 py-1 text-xs opacity-0 transition-opacity"
					>{lang.name}</span
				>
			</button>
			{#if lang.code !== languages[languages.length - 1].code}
				<div class="mx-1.5 w-[2px] flex-1 bg-zinc-700/50"></div>
			{/if}
		{/each}
	</div>
</header>
