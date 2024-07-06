const toLowercaseFirstChar = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

/**
 * @description
 * 배열 내 오브젝트의 키 값의 첫 글자를 소문자로 바꿔주는 유틸리티 함수
 */
const transformKeys = <T extends Record<string, any>>(
  obj: T,
): { [K in keyof T as K extends string ? Lowercase<K> : never]: T[K] } => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = toLowercaseFirstChar(key) as keyof typeof acc
    acc[newKey] = obj[key]
    return acc
  }, {} as any)
}

export { transformKeys }
