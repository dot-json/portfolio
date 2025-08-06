<script lang="ts">
	import { t } from '$lib/i18n.js';

	const { name, name2, desc, icon, icon2 } = $props<{
		name: string;
		name2?: string;
		desc: string;
		icon: string;
		icon2?: string;
	}>();
</script>

<div class="flex flex-col">
	<h2
		class="z-10 -mb-[1px] flex w-fit items-center gap-1.5 rounded-2xl rounded-b-none border border-b-0 border-surface-border/50 bg-surface-accent px-3 pt-2 text-xl font-medium"
	>
		<img src={icon} alt={name} class="size-6 object-cover object-center" />
		<span>{name}</span>
		{#if name2}
			<span>&</span>
			<img src={icon2} alt={name2} class="ml-1 size-6" />
			<span>{name2}</span>
		{/if}
	</h2>
	<p
		class="rounded-2xl rounded-tl-none border border-surface-border/50 bg-surface-accent p-4 text-surface-text/75"
	>
		{desc}
	</p>
</div>
