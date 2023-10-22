import { Button, Group, Modal } from '@mantine/core'

import { useDisclosure } from '@mantine/hooks'

const Modall = () => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Modal.Root opened={opened} onClose={close}>
				<Modal.Overlay />
				<Modal.Content>
					<Modal.Header>
						<Modal.Title>Seçtiğiniz Renk Kopyalandı</Modal.Title>
						<Modal.CloseButton />
					</Modal.Header>
					<Modal.Body>İstediğiniz Gibi Kullanabilirsiniz</Modal.Body>
				</Modal.Content>
			</Modal.Root>

			<Group position="center">
				<Button onClick={open} size="xs" color="red">
					Renk Kopyalandı Modalı
				</Button>
			</Group>
		</>
	)
}
export default Modall
