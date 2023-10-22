import '../App.css'

import { ActionIcon, CopyButton, Tooltip } from '@mantine/core'
import { ColorPicker, Group, Stack, Text } from '@mantine/core'
import { IconCheck, IconCopy } from '@tabler/icons-react'

import { useState } from 'react'

const AlphaCard = () => {
	const [value, onChange] = useState('rgba(47, 119, 150, 0.7)')
	const [value2, onChange2] = useState('#0fff0fc4')
	const [value3, onChange3] = useState('hsla(29, 90%, 46%, 0.81)')
	return (
		<>
			<Group position="center" spacing="xl" className="cards">
				<Stack align="center">
					<ColorPicker format="rgba" value={value} onChange={onChange} size="md" />
					<Text>{value}</Text>
					<CopyButton value={value} timeout={2000}>
						{({ copied, copy }) => (
							<Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
								<ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
									{copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
								</ActionIcon>
							</Tooltip>
						)}
					</CopyButton>
				</Stack>

				<Stack align="center">
					<ColorPicker format="hexa" value={value2} onChange={onChange2} size="md" />
					<Text>{value2}</Text>
					<CopyButton value={value2} timeout={2000}>
						{({ copied, copy }) => (
							<Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
								<ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
									{copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
								</ActionIcon>
							</Tooltip>
						)}
					</CopyButton>
				</Stack>
				<Stack align="center">
					<ColorPicker format="hsla" value={value3} onChange={onChange3} size="md" />
					<Text>{value3}</Text>
					<CopyButton value={value3} timeout={2000}>
						{({ copied, copy }) => (
							<Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
								<ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
									{copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
								</ActionIcon>
							</Tooltip>
						)}
					</CopyButton>
				</Stack>
			</Group>
		</>
	)
}

export default AlphaCard
