// Module imports
import {
	Head as NextHead,
	Html as NextHTML,
	Main as NextMain,
	NextScript,
} from 'next/document'





/**
 * Customises the root HTML shell.
 */
export default function Document() {
	return (
		<NextHTML>
			<NextHead>
				<meta charSet={'utf-8'} />

				<link
					href={'https://use.typekit.net/blb7pby.css'}
					rel={'stylesheet'} />
				<link
					href={'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'}
					rel={'stylesheet'} />
			</NextHead>

			<body>
				<NextMain />
				<NextScript />
			</body>
		</NextHTML>
	)
}
