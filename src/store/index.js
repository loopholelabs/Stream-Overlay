// Module imports
import create from 'zustand/vanilla'
import { v4 as uuid } from 'uuid'





export const store = create((set, get) => ({
	chatMessages: [],
	events: [],
	isChatConnected: false,
	isChatConnecting: true,

	addChatMessage(messageObject) {
		const { chatMessages } = get()

		set({
			chatMessages: [
				...chatMessages,
				messageObject,
			]
		})
	},

	addEvent(eventObject) {
		const eventID = uuid()

		set(previousState => {
			const { events } = previousState

			return {
				events: [
					...events,
					{
						id: eventID,
						...eventObject,
					},
				],
			}
		})

		setTimeout(() => get().removeEvent(eventID), 10000)
	},

	removeEvent(eventID) {
		set(previousState => {
			const { events } = previousState

			return {
				events: events.filter(event => {
					return event.id !== eventID
				})
			}
		})
	},
}))
