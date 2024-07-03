const toLowercaseFirstChar = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

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
