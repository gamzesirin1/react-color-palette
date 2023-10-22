import '../App.css'

import { ColorSwatch, Group, Text, useMantineTheme } from '@mantine/core'

const Header = () => {
	const theme = useMantineTheme()
	const swatches = Object.keys(theme.colors).map((color) => <ColorSwatch key={color} color={theme.colors[color][6]} />)

	const swatchess = Object.keys(theme.colors).map((color) => (
		<ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
	))

	return (
		<div className="header">
			<Group position="center" spacing="xs">
				{swatches}
			</Group>
			<Text align="center" mt={5}>
				Color Palette App
			</Text>
			<Group position="center" spacing="xs">
				{swatchess}
			</Group>
		</div>
	)
}

export default Header
