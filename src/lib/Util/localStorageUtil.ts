/**
 * @description 로컬스토리지에 key, value 세팅하는 try catch 함수
 * @param {string} key
 * @param {string | Object | Array} value
 * @returns true | false
 */
export const _setLocalStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    return false
  }
}

/**
 * @param {string} key
 * @returns data | false
 */
export const _getLocalStorage = (key: string) => {
  try {
    const data: any = window.localStorage.getItem(key)

    // 데이터가 있다면 parse해서 내려주고 없다면 false로 실패
    return data ? JSON.parse(data) : false
  } catch (e) {
    return false
  }
}

/**0
 * @description 로컬스토리지에서 삭제하고싶은 key값 제거 함수
 * @param {string} key
 * @returns true | false
 */
export const _removeLocalStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}
