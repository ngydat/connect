import { PipeTransform } from '@angular/core';
/**
 * Creates a new String with some or all of the matches of a pattern replaced by
 * a replacement.
 *
 * The pattern to be matched is specified by the 'pattern' parameter.
 *
 * The replacement to be set is specified by the 'replacement' parameter.
 *
 * An optional 'flags' parameter can be set.
 *
 * ### Usage
 *
 *     expression | replace:pattern:replacement
 *
 * All behavior is based on the expected behavior of the JavaScript API
 * String.prototype.replace() function.
 *
 * Where the input expression is a [String] or [Number] (to be treated as a string),
 * the `pattern` is a [String] or [RegExp],
 * the 'replacement' is a [String] or [Function].
 *
 * --Note--: The 'pattern' parameter will be converted to a RegExp instance. Make sure to escape the
 * string properly if you are matching for regular expression special characters like parenthesis,
 * brackets etc.
 *
 * @deprecated The current pipe has limited functionality. The pipe api is not meant to be able
 * express complex yet generic value transformations. We recommend that these transformations happen
 * in the component logic instead.
 */
export declare class ReplacePipe implements PipeTransform {
    transform(value: any, pattern: string | RegExp, replacement: Function | string): any;
    private _supportedInput(input);
    private _supportedPattern(pattern);
    private _supportedReplacement(replacement);
}
