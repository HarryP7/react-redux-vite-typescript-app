import { compose } from 'core'
import { withReactQuery } from './withReactQuery'
import { withStore } from './withStore'

export const withProviders = compose(withStore, withReactQuery)