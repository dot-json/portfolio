<script lang="ts">
	import { t } from '$lib/i18n.js';
</script>

<section class="flex flex-col gap-4">
	<div class="grid gap-8 sm:grid-cols-[auto_1fr]">
		<img
			src="/images/profile_no_bg.png"
			alt="profile"
			class="cover size-48 rounded-2xl border border-surface-border/50 bg-surface-accent/25 backdrop-blur-3xl"
		/>
		<div class="flex flex-col gap-2 sm:gap-4">
			<h1 class="text-4xl font-bold sm:text-5xl">{$t.intro.title}</h1>
			<p class="text-zinc-400 sm:text-lg">
				{$t.intro.description}
			</p>
		</div>
	</div>
	<div class="flex gap-2">
		<button
			class="grid cursor-pointer grid-cols-[1.75rem_auto] place-items-center items-center rounded-lg border border-surface-border/50 px-2 text-zinc-400 transition-colors hover:border-surface-border hover:bg-surface-accent hover:text-surface-text"
			aria-label={$t.intro.resumeAria}
			onclick={() => window.open('/doc/CV.pdf', '_blank')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-scroll-text-icon lucide-scroll-text"
				><path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path
					d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
				/></svg
			><span class="text-sm">{$t.intro.resume}</span></button
		>
		<button
			class="grid size-10 cursor-pointer place-items-center items-center rounded-lg border border-surface-border/50 text-zinc-400 transition-colors hover:border-surface-border hover:bg-surface-accent hover:text-surface-text"
			aria-label={$t.intro.githubAria}
			onclick={() => window.open('https://github.com/dot-json', '_blank')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-github-icon lucide-github"
				><path
					d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
				/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
			></button
		>
		<button
			class="grid size-10 cursor-pointer place-items-center items-center rounded-lg border border-surface-border/50 text-zinc-400 transition-colors hover:border-surface-border hover:bg-surface-accent hover:text-surface-text"
			aria-label={$t.intro.linkedinAria}
			onclick={() => window.open('https://www.linkedin.com/in/zsombor-gazdag/', '_blank')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-linkedin-icon lucide-linkedin"
				><path
					d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
			></button
		>
	</div>
</section>
