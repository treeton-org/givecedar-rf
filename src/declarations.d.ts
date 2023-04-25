declare module '*.svg' {
  const content: string
  export default content
}

declare module "*.jpg" {
  const value: string
  export default value
}

declare module '*.sass' {
  const classes: Record<string, string>
  export default classes
}
