"use server"

export async function saveMessage(formData) {
	const message = formData.get("message")

	console.log("Besked modtaget:", message)
}