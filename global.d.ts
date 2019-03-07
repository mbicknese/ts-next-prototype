/* istanbul ignore file */
/**
 * Solves React in UMD issue
 * https://github.com/Microsoft/TypeScript/issues/10178#issuecomment-263030856
 */
/* eslint no-unused-vars: 0, no-undef: 0 */
import * as ReactObj from 'react'
import * as ReactDOMObj from 'react-dom'

declare global {
    var React: typeof ReactObj
    var ReactDOM: typeof ReactDOMObj
}
