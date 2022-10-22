import { Dictionary, L10nRawData } from './type.js';
import { L10nFieldKeys } from './enum.js';
/**
 * Dictionary of key-value pair ```(language, field_value)```.
 *
 * Usage:
 * ``` js
 * button_l10n_filed.get('en') // "Start"
 * ```
 */
declare class L10nField {
    private _data;
    constructor(data: Dictionary);
    get(key: string): string;
}
/**
 * Dictionary of key-value pair ```(field_key, l10n_field)```.
 *
 * Usage:
 * ``` js
 * l10n_book.get('BUTTON_TEXT').get('en') // "Start"
 * ```
 */
declare class L10nBook {
    private _data;
    constructor(...raw_data: readonly L10nRawData[]);
    get(key: L10nFieldKeys): L10nField;
}
export { L10nBook };
