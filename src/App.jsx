import './App.css'

import AlphaCard from './components/AlphaCard'
import ColorCard from './components/ColorCard'
import { Container } from '@mantine/core'
import FavColor from './components/FavColor'
import Header from './components/Header'
import Spoilers from './components/Spoiler'

function App() {
	return (
		<>
			<Header />
			<Container>
				<Spoilers />
				<FavColor />
				<AlphaCard />
				<ColorCard />
			</Container>
		</>
	)
}

export default App
