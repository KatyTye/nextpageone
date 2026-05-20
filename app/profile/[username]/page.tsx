type Props = {
	params: Promise<{
		username: string;
	}>
}

export default async function Profile({ params }: Props) {
	const resolvedParams = await params

	return (
		<h1>Profil for: {resolvedParams.username}</h1>
	)
}