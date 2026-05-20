export default function Kontakt() {

	return (<>
		<form action={"/about"}>
			<label htmlFor="navn">
				<span>
					Indtast dit navn her:
				</span>
				<input type="text" name="navn" id="navn" required autoComplete="name" />
			</label>

			<label htmlFor="email">
				<span>
					Indtast din email her:
				</span>
				<input type="email" name="email" id="email" required autoComplete="email" />
			</label>

			<label htmlFor="besked">
				<span>
					Indtast din besked her:
				</span>
				<textarea name="besked" id="besked" required></textarea>
			</label>

			<button type="submit">
				Indsend Besked
			</button>
		</form>
	</>)
}