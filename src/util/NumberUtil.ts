import toNumber from 'lodash/toNumber';
import isNumber from 'lodash/isNumber';
import round from 'lodash/round';

export default class NumberUtil {
  static parse(stringOrNumber: any[] | undefined) {
    if (Array.isArray(stringOrNumber)) {
      return stringOrNumber.map((v) => NumberUtil.parseNumber(v));
    }
    return NumberUtil.parseNumber(stringOrNumber);
  }

  static parseNumber(stringOrNumber: undefined) {
    let value = toNumber(stringOrNumber);
    if (isNumber(value) && !isNaN(value)) {
      return value;
    }
    return undefined;
  }

  static formattedNumber(stringOrNumber: any, minFraction = 0) {
    let value = toNumber(stringOrNumber);
    if (isNumber(value) && !isNaN(value)) {
      return value.toLocaleString(navigator.language, {
        minimumFractionDigits: minFraction,
      });
    }
    return undefined;
  }

  static round(number: number, decimalPlaces = 4) {
    return round(number, decimalPlaces);
  }

  static humanCount(rawCount: number) {
    let count = rawCount + 0;
    const thresh = 1000;
    if (Math.abs(count) < thresh) {
      return `${count}`;
    }
    const units = ['K', 'mil'];
    let u = -1;
    do {
      count /= thresh;
      ++u;
    } while (Math.abs(count) >= thresh && u < units.length - 1);
    return `${count.toFixed(1)}${units[u]}`;
  }
}
