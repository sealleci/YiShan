import { Dictionary, L10nRawData } from './type.js'
import { L10nFieldKey } from './enum.js'

/**
 * Dictionary of key-value pair ```(language, field_value)```.
 * 
 * Usage:
 * ``` js
 * button_l10n_filed.speak('EN') // "Start"
 * ```
 */
class L10nField {
    private _data: Dictionary

    constructor(data: Dictionary) {
        this._data = data
    }

    public speak(key: string): string {
        if (key in Object.keys(this._data)) {
            const value = this._data[key]
            return value !== undefined && value !== '' ? value : 'VALUE_MISSING'
        }
        return 'KEY_ERROR'
    }
}

/**
 * Dictionary of key-value pair ```(field_key, l10n_field)```.
 * 
 * Usage:
 * ``` js
 * l10n_book.consult(BUTTON_TEXT).speak('EN') // "Start"
 * ```
 */
class L10nBook {
    private _data: Dictionary<L10nFieldKey, L10nField> = {}
    constructor(...raw_data: readonly L10nRawData[]) {
        for (const [field_key_string, field_key] of Object.entries(L10nFieldKey)) {
            const page: Dictionary = {}

            for (const raw_page of raw_data) {
                if (raw_page.language === '') {
                    continue
                }

                let field_value = ''

                if (field_key_string in raw_page.fields) {
                    const raw_field_value = raw_page.fields[field_key_string]
                    field_value = raw_field_value !== undefined ? raw_field_value : ''
                }

                page[raw_page.language] = field_value
            }

            this._data[field_key] = new L10nField(page)
        }
    }

    public consult(key: L10nFieldKey): L10nField {
        let field = this._data[key]
        return field !== undefined ? field : new L10nField({})
    }
}

export { L10nBook }