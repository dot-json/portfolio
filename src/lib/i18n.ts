import { writable, derived } from 'svelte/store';
import { getTranslation, type LanguageCode } from './translations/index.js';

export const currentLanguage = writable<LanguageCode>('en');

export const t = derived(currentLanguage, ($lang) => getTranslation($lang));

export function changeLanguage(newLang: LanguageCode) {
	currentLanguage.set(newLang);
}
