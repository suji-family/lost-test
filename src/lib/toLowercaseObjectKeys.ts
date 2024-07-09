const toLowercaseFirstChar = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

type LowercaseFirst<T> = {
  [K in keyof T as K extends string
    ? `${Lowercase<K extends `${infer First}${infer Rest}` ? First : never>}${K extends `${infer First}${infer Rest}` ? Rest : ''}`
    : never]: T[K]
}

/**
 * @description
 * 배열 내 오브젝트의 키 값의 첫 글자를 소문자로 바꿔주는 유틸리티 함수
 */
const transformKeys = <T extends Record<string, any>>(
  obj: T,
): LowercaseFirst<T> => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = toLowercaseFirstChar(key) as keyof LowercaseFirst<T>
    const value = obj[key]
    acc[newKey] =
      typeof value === 'object' && value !== null ? transformKeys(value) : value
    return acc
  }, {} as LowercaseFirst<T>)
}

export { transformKeys }
