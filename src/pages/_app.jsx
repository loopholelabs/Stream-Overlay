/* eslint-env node */
// Style imports
import '../scss/reset.scss'
import '../scss/lib.scss'
import '../scss/app.scss'





// Module imports
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import NextHead from 'next/head.js'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'





// Local imports
import { AppWrapper } from '../components/AppWrapper/AppWrapper.jsx'
import { useNProgress } from '../hooks/useNProgress.js'
import { useTwitch } from '../hooks/useTwitch.js'





fontAwesomeConfig.autoAddCss = false

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	useTwitch()
	useNProgress()

	return (
		<>
			<NextHead>
				<meta
					content={'width=device-width, initial-scale=1, maximum-scale=1'}
					name={'viewport'} />
				<meta charSet={'utf-8'} />
			</NextHead>

			<AppWrapper title={Component.title}>
				<Component
					key={router.route}
					{...pageProps} />
			</AppWrapper>
		</>
	)
}

App.defaultProps = {
	pageProps: {},
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	pageProps: PropTypes.object,
}
