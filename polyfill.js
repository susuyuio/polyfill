/**
 * String.prototype.repeat 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
 * count 重复次数
 */
if (!String.prototype.repeat_Su) {
  String.prototype.repeat_Su = function repeat_Su(count) {
    var str = "" + this;
    if (count == Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count = parseInt(count);
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count !== count) {
      count = 0;
    }
    if (str.length == 0 || count == 0) {
      return "";
    }
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        "repeat count must not overflow maximum string size"
      );
    }
    var rpt = "";
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}
/**
 * String.prototype.padStart 在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串
 * @param targetLength 即将填充到的长度，若小于原字符串长度则返回原字符串
 * @param padString （可选）填充字符串，可被截取
 */
if (!String.prototype.padStart_Su) {
  String.prototype.padStart_Su = function padStart_Su(targetLength, padString) {
    targetLength = targetLength - this.length;
    padString = typeof padString === "undefined" ? " " : String(padString);
    if (targetLength <= 0) {
      return String(this);
    }
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(this);
  };
}
/**
 * String.prototype.padEnd 在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串
 * @param targetLength 即将填充到的长度，若小于原字符串长度则返回原字符串
 * @param padString （可选）填充字符串，可被截取
 */
if (!String.prototype.padEnd_Su) {
  String.prototype.padEnd_Su = function padEnd_Su(targetLength, padString) {
    targetLength = targetLength - this.length;
    padString = typeof padString === "undefined" ? " " : String(padString);
    if (targetLength <= 0) {
      return String(this);
    }
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return String(this) + padString.slice(0, targetLength);
  };
}
