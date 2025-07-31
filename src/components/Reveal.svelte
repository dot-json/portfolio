<script lang="ts">
	import { onMount } from 'svelte';

	let wm: HTMLSpanElement;

	const scrambleWord = () => {
		const word = '771.NETWORK';
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
		let interval: ReturnType<typeof setInterval>;
		let iteration = 0;

		interval = setInterval(() => {
			if (wm != null) {
				wm.innerText = wm.innerText
					.split('')
					.map((_letter, id) => {
						if (id < iteration) {
							return word[id];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join('');
				if (iteration >= word.length) {
					clearInterval(interval);
				}
				iteration += 1 / 2;
			}
		}, 80);
	};

	onMount(() => {
		if (wm != null) {
			wm.innerText = '000.0000000';
			scrambleWord();
		}
	});
</script>

<div
	id="reveal"
	class="grid place-items-center font-title text-4xl font-bold text-zinc-500 sm:text-5xl"
>
	<span bind:this={wm}>000.0000000</span>
</div>

<style>
	#reveal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-surface);
		z-index: 9999;
		pointer-events: none;
		animation: reveal 3s ease-in-out forwards;
	}
	#reveal::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/images/gradients.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: scale(1.2);
		z-index: -1;
		opacity: 0.1;
		filter: blur(125px);
		pointer-events: none;
	}

	@keyframes reveal {
		0% {
			opacity: 1;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
