export function ltrim(str: string, chars = ' \n\r\t\v\x00'): string {
    if (str.length == 0) return '';

    let i = 0;
    while (i < str.length) {
        if (chars.indexOf(str.charAt(i)) == -1) {
            break;
        }
        i++;
    }

    return str.substring(i);
}

export function rtrim(str: string, chars = ' \n\r\t\v\x00'): string {
    if (str.length == 0) return '';

    let i = str.length - 1;
    while (i > -1) {
        if (chars.indexOf(str.charAt(i)) == -1) {
            break;
        }
        --i;
    }

    return str.substring(0, ++i);
}

export function trim(str: string, chars = ' \n\r\t\v\x00'): string {
    if (str.length == 0) return '';

    return ltrim(rtrim(str, chars), chars);
}
