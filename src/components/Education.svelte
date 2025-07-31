<script lang="ts">
	import { t } from '$lib/i18n.js';
</script>

<section class="flex flex-col gap-4">
	<h2 class="text-3xl font-semibold sm:text-4xl">{$t.education.title}</h2>
	<div class="grid grid-cols-[auto_1fr] gap-6">
		<img
			src="/images/elte.png"
			alt="Eötvös Loránd Tudományegyetem"
			class="cover size-12 rounded-lg sm:size-16"
		/>
		<div class="flex justify-between">
			<div class="flex flex-col">
				<h3 class="text-xl leading-5 font-medium sm:text-2xl sm:leading-7">
					{$t.education.institution}
				</h3>
				<p class="text-sm text-surface-text-muted sm:text-base">
					{$t.education.degree}
				</p>
				<p class="text-xs text-surface-text-muted/75">{$t.education.location}</p>
			</div>
			<p class="text-sm sm:text-lg">{$t.education.dates}</p>
		</div>
	</div>
</section>
