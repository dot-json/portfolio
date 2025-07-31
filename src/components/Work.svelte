<script lang="ts">
	import { t } from '$lib/i18n.js';

	$: jobs = [
		{
			key: 'oracle' as const,
			image: '/images/oracle.jpg',
			alt: 'Oracle'
		},
		{
			key: 'moonlabs' as const,
			image: '/images/moonlabs.jpeg',
			alt: 'Moonlabs'
		}
	];
</script>

<section class="flex flex-col gap-4">
	<h2 class="text-3xl font-semibold sm:text-4xl">{$t.work.title}</h2>
	<div class="flex flex-col gap-8">
		{#each jobs as job}
			<div class="grid grid-cols-[auto_1fr] gap-6">
				<img src={job.image} alt={job.alt} class="cover size-12 rounded-lg sm:size-16" />
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<div class="flex flex-col">
							<h3 class="text-xl leading-5 font-medium sm:text-2xl sm:leading-7">
								{$t.work.jobs[job.key].company}
							</h3>
							<p class=" text-sm text-surface-text-muted sm:text-base">
								{$t.work.jobs[job.key].position}
							</p>
							<p class="text-xs text-surface-text-muted/75">{$t.work.jobs[job.key].location}</p>
						</div>
						<p class="text-sm sm:text-lg">{$t.work.jobs[job.key].dates}</p>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each $t.work.jobs[job.key].skills as skill}
							<span
								class="rounded-full border border-surface-border/50 bg-surface-accent px-2 py-1 text-xs font-medium text-surface-text"
							>
								{skill}
							</span>
						{/each}
					</div>
					<p class="text-surface-text/75">{$t.work.jobs[job.key].desc}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
