import {mappings} from './mappings';

export default function foldcase(string) {
	let result = "";
	for (const char of string) {
		const codePoint = char.codePointAt(0);
		result += String.fromCodePoint(mappings[codePoint] || codePoint);
	}
	return result;
};