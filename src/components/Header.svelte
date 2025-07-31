<script lang="ts">
	type Language = {
		code: 'en' | 'hu';
		name: 'English' | 'Magyar';
	};

	const { changeLanguage, currentLanguage } = $props<{
		changeLanguage: (newLang: Language) => void;
		currentLanguage: 'en' | 'hu';
	}>();
</script>

<header
	class="sticky top-0 flex h-16 items-center justify-between rounded-2xl border border-zinc-700/50 bg-zinc-800/15 px-4 backdrop-blur-2xl"
>
	<h1 class="text-2xl font-bold">Portfolio</h1>
	<div class="flex">
		<button
			id="en-button"
			class="cursor-pointer rounded p-1.5"
			onclick={() => changeLanguage({ code: 'en', name: 'English' })}
		>
			<img
				src={`/icons/en.svg`}
				alt="English"
				class="inline-block h-6 w-6 transition-opacity"
				style={`opacity: ${currentLanguage === 'en' ? 1 : 0.5};`}
			/>
		</button>
		<div class="mx-1.5 w-[2px] flex-1 bg-zinc-700/50"></div>
		<button
			id="hu-button"
			class="cursor-pointer rounded p-1.5"
			onclick={() => changeLanguage({ code: 'hu', name: 'Magyar' })}
		>
			<img
				src={`/icons/hu.svg`}
				alt="Magyar"
				class="inline-block h-6 w-6 transition-opacity"
				style={`opacity: ${currentLanguage === 'hu' ? 1 : 0.5};`}
			/>
		</button>
	</div>
</header>
