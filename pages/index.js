import Iframe from 'react-iframe'

export default function Home() {
  return (
	<Iframe url={process.env.NEXT_PUBLIC_APP_URL}
	width="100%"
	height="100%"
	id=""
	className=""
	display="block"
	position="relative"/>
  )
}
