<script setup>
	import { ref, watch } from 'vue';

	let nodeData = [
		{
			key: '0',
			label: 'test2',
			data: { count: 9999, icon: 'icon-vis-Grid' },
			children: [
				{ key: '0 - 0', label: 'test3.1', data: { count: 10 } },
				{ key: '0 - 1', label: 'test3.2', data: { count: 20 } },
				{ key: '0 - 2', label: 'test3.3', data: { count: 30 } },
				{ key: '0 - 3', label: 'test3.4', data: { count: 40 } }
			]
		}
	];

	const selectedKeyC = ref();

	watch(selectedKeyC, (v) => {
		console.log('🚀 ~ watch ~ selectedKeyC:', selectedKeyC.value);
	});
</script>

<template>
	<Story title="Use Tree">
		<Tree
			v-model:selectionKeys="selectedKeyC"
			:value="nodeData"
			selectionMode="single"
			class="w-full md:w-[30rem]"
		></Tree>
	</Story>
</template>
