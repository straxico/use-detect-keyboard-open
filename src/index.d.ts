declare module "use-detect-keyboard-open" {
  /**
   * Hook which observes soft keyboard open. Return boolean
   * you can set default value and minKeyboardHeight
   */
  export default function (
    minKeyboardHeight?: number,
    defaultValue?: boolean
  ): boolean;
}
