import { Dictionary, L10nRawData } from './type.js';
import { L10nFieldKey } from './enum.js';
/**
 * Dictionary of key-value pair ```(language, field_value)```.
 *
 * Usage:
 * ``` js
 * button_l10n_filed.speak('EN') // "Start"
 * ```
 */
declare class L10nField {
    private _data;
    constructor(data: Dictionary);
    speak(key: string): string;
}
/**
 * Dictionary of key-value pair ```(field_key, l10n_field)```.
 *
 * Usage:
 * ``` js
 * l10n_book.consult(BUTTON_TEXT).speak('EN') // "Start"
 * ```
 */
declare class L10nBook {
    private _data;
    constructor(...raw_data: readonly L10nRawData[]);
    consult(key: L10nFieldKey): L10nField;
}
export { L10nBook };
