import { hot } from 'react-hot-loader/root'
import App from 'components/App/App'
import React from 'react'

// @ts-ignore
export default process.env.NODE_ENV === 'development' ? (hot(App) as React.FC) : (App as React.FC)
