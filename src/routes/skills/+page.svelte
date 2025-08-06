<script lang="ts">
	import { t } from '$lib/i18n.js';
	import Skill from '../../components/Skill.svelte';
</script>

<section class="flex flex-col gap-8">
	{#each $t.skills as skill}
		<Skill
			name={skill.name}
			name2={skill.name2}
			desc={skill.desc}
			icon={skill.icon}
			icon2={skill.icon2}
		/>
	{/each}
</section>
