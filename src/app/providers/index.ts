import { compose } from 'core'
import { withStore } from './withStore'

export const withProviders = compose(withStore)