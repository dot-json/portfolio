<script lang="ts">
	import { t } from '$lib/i18n.js';
	import { languages, type LanguageCode } from '$lib/translations/index.js';
	import { cn } from '$lib/utils.js';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

	const { changeLanguage, currentLanguage } = $props<{
		changeLanguage: (langCode: LanguageCode) => void;
		currentLanguage: LanguageCode;
	}>();

	let openMenu = $state<boolean>(false);
</script>

<header class="sticky top-4 z-[771] flex h-16">
	<div
		class={cn(
			'absolute inset-0 h-16 overflow-hidden rounded-2xl border border-surface-border/50 bg-surface-accent/25 px-4 shadow-2xl backdrop-blur-lg transition-all sm:overflow-visible',
			openMenu && 'h-48'
		)}
	>
		<div class="flex h-16 w-full items-center justify-between">
			<h1 class="text-2xl font-semibold">{$t.header.title}</h1>
			<div class="flex items-center gap-4">
				<nav class="hidden items-center gap-3 font-semibold select-none sm:flex">
					<a
						href="/"
						class={cn('opacity-60 transition-opacity hover:opacity-100', {
							'opacity-100': page.url.pathname === '/'
						})}>HOME</a
					>
					<a
						href="/skills"
						class={cn('opacity-60 transition-opacity hover:opacity-100', {
							'opacity-100': page.url.pathname === '/skills'
						})}>SKILLS</a
					>
					<!-- <a
						href="/projects"
						class={cn('opacity-60 transition-opacity hover:opacity-100', {
							'opacity-100': page.url.pathname === '/projects'
						})}>PROJECTS</a
					> -->
				</nav>
				<div class="hidden sm:flex">
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
				<button
					aria-label="toggle menu"
					class="grid cursor-pointer place-items-center sm:hidden"
					onclick={() => (openMenu = !openMenu)}
				>
					<div
						class={cn('size-10 text-surface-text transition-opacity [grid-area:1/1]', {
							'opacity-100': !openMenu,
							'opacity-0': openMenu
						})}
					>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4 12H20M4 8H20M4 16H12"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
					<div
						class={cn('size-10 text-surface-text transition-opacity [grid-area:1/1]', {
							'opacity-100': openMenu,
							'opacity-0': !openMenu
						})}
					>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6 6L18 18M18 6L6 18"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
				</button>
			</div>
		</div>
		<div class="flex flex-col items-end gap-1 text-end">
			<nav class="flex flex-col gap-3">
				{#if openMenu}
					<a
						in:fly={{ delay: 100 }}
						out:fly
						href="/"
						class="text-xl font-medium"
						onclick={() => (openMenu = false)}>HOME</a
					>
					<a
						in:fly={{ delay: 200 }}
						out:fly
						href="/skills"
						class="text-xl font-medium"
						onclick={() => (openMenu = false)}>SKILLS</a
					>
					<!-- <a
						in:fly={{ delay: 300 }}
						out:fly
						href="/projects"
						class="text-xl font-medium"
						onclick={() => (openMenu = false)}>PROJECTS</a
					> -->
					<div in:fly={{ delay: 400 }} out:fly class="flex w-fit self-end">
						{#each languages as lang}
							<button
								class="relative cursor-pointer rounded p-1.5"
								onclick={() => {
									changeLanguage(lang.code);
									openMenu = false;
								}}
							>
								<img
									src={`/icons/${lang.code}.svg`}
									alt={lang.name}
									class="inline-block h-6 w-6 transition-opacity"
									style={`opacity: ${currentLanguage === lang.code ? 1 : 0.5};`}
								/>
							</button>
							{#if lang.code !== languages[languages.length - 1].code}
								<div class="mx-1.5 !w-[2px] bg-surface-border"></div>
							{/if}
						{/each}
					</div>
				{/if}
			</nav>
		</div>
	</div>
</header>
