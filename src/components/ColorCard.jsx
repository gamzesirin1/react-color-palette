import '../App.css'

import { ColorPicker } from '@mantine/core'

const ColorCard = () => {
	return (
		<>
			<ColorPicker
				className="color-picker"
				format="hex"
				align="center"
				size="sm"
				swatchesPerRow={8}
				swatches={[
					'#25262b',
					'#868e96',
					'#fa5252',
					'#e64980',
					'#be4bdb',
					'#7950f2',
					'#4c6ef5',
					'#228be6',
					'#15aabf',
					'#12b886',
					'#40c057',
					'#82c91e',
					'#fab005',
					'#fd7e14',
					'#f76707',
					'#e8590c',
					'#d9480f',
					'#cc3f5c',
					'#be4bdb',
					'#5f3dc4',
					'#3c40c6',
					'#0dcaf0',
					'#0d6efd',
					'#ffffff'
				]}
			/>
		</>
	)
}

export default ColorCard
