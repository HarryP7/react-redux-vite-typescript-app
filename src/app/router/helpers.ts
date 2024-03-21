
/**
 * Получить путь с заданным id
 * @param {string} path - путь c id типа 'path:id'
 * @param {string | number} id - значение идентификатора
 */
export const getPathWithId = (path: string, id: string | number) => {
  const startPath = path.split(':')[0]
  return `${startPath}:${id}`
}