// Type definitions next-redux-observable
// Project: https://www.npmjs.com/package/next-redux-observable
// Definitions by: Codxse <https://github.com/codxse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import React from 'react'

type SSRComponent<C = any> = (component: C) => WrappedComponent

declare class WrappedComponent extends React.Component<any, any, any> {
  static displayName: string
  static getInitialProps(props: any): any
  render(): any

}

export function resolveActions<T = any & {getState()}, R = any>(actions: any, tout: number): any
export function withObservable<R = any, C = any>(rootEpic: R): SSRComponent<C>


type SSRFunctionArgs<S = any, R = any> = {
  store: S
  isServer: boolean
  rootEpic: R
}
type SSRFunction<T = any & {getState(): any}, R = any> = (args: SSRFunctionArgs<T, R>) => Promise<any>