import { hot } from 'react-hot-loader/root'
import App from 'components/App/App'

// @ts-ignore
export default (process.env.NODE_ENV === 'development'
  ? (hot(App) as any)
  : (App as any))
