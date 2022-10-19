// Local imports
import { store } from '../store/index.js'





function initialiseESP() {
	const espSocket = new WebSocket(process.env.NEXT_PUBLIC_ESP_URL)

	espSocket.addEventListener('close', () => initialiseESP())

	espSocket.addEventListener('open', () => {
		espSocket.send(JSON.stringify({
			action: 'SUBSCRIBE',
			channel: process.env.NEXT_PUBLIC_TWITCH_USERNAME,
			event: 'channel.follow',
		}))
	})

	espSocket.addEventListener('message', event => {
		const eventData = JSON.parse(event.data)

		switch (eventData.action) {
			case 'EVENT':
				store.getState().addEvent(eventData)
				break

			case 'PING':
				espSocket.send(JSON.stringify({ action: 'PONG' }))
				break

			default:
				console.log('Unrecognised event from ESP:', eventData)
		}
	})

	return () => espSocket.close()
}

/**
 * Initialises a connection to the fdgt ESP interface and stores messages in the Zustand store.
 */
export async function initialiseTwitchEvents() {
	initialiseESP()
}
