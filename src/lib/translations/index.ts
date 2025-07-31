import { en } from './en.js';
import { hu } from './hu.js';

export const translations = {
	en,
	hu
} as const;

export type LanguageCode = keyof typeof translations;

export const languages = [
	{ code: 'en' as const, name: 'English' },
	{ code: 'hu' as const, name: 'Magyar' }
];

export function getTranslation(lang: LanguageCode) {
	return translations[lang] || translations.en;
}
