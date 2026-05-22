import { saveMessage } from "./action"

export default function ActionsDemoPage() {
	return (
		<form action={saveMessage}>
			<input type="text" name="message" id="message" placeholder="Skriv en besked" />
			<button type="submit">Send</button>
		</form>
	)
}