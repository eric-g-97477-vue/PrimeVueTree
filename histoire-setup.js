import { defineSetupVue3 } from '@histoire/plugin-vue';
import PrimeVue from 'primevue/config';

import '@/assets/tailwind.css';

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {

	app.use(PrimeVue, {
		theme: 'none'
	});
});
