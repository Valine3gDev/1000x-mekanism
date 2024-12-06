module.exports = {
  /**
   * バージョン文字列を各部分に分解する
   * @param {string} version 
   * @returns {{prefix: string, major: number, minor: number, patch: number}}
   */
  parseVersion: (version) => {
    /** @type {string[]} */
    let [, prefix, ma, mi, pa] = version.match(/([^0-9]*)(\d+)\.(\d+)\.(\d+)/);
    /** @type {number[]} */
    let [major, minor, patch] = [ma, mi, pa].map(Number);
    return { prefix, major, minor, patch };
  },
};
