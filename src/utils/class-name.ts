export function className(classBinding: { [key: string]: boolean }) {
  return Object
    .keys(classBinding)
    .reduce((fullClassName, className) => {
      if (classBinding[className]) {
        return `${fullClassName} ${className}`;
      }

      return fullClassName;
    }, '');
}