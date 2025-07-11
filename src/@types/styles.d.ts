type CSSModuleClasses = Record<string, string>;

declare module '*.module.css' {
  const styles: CSSModuleClasses;
  export default styles;
}
