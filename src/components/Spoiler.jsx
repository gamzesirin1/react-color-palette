import '../App.css'

import { Spoiler } from '@mantine/core'

const Spoilers = () => {
	return (
		<Spoiler maxHeight={20} showLabel="Show more" hideLabel="Hide" className="spolier">
			{`Merhaba ve hoş geldiniz! Renk Paleti uygulamamıza hoş geldiniz. Bu uygulama, renklerle ilgili ihtiyaçlarınızı karşılamak için tasarlanmıştır. Renklerin dünyasına dalmak, tasarım projelerinizde veya kişisel zevklerinizde kullanmak için ideal bir yol sunar.

Renk Paleti uygulamamız, sizlere geniş bir renk yelpazesi sunar. İster doğal renklerden ilham almak isteyin, ister canlı ve enerjik renklere yönelmek isteyin, uygulamamızda aradığınız her türlü renge ulaşabilirsiniz. Kullanıcı dostu arayüzü sayesinde, istediğiniz rengi kolayca bulabilir ve kaydedebilirsiniz.

Uygulamamızın özellikleri arasında şunlar bulunur:
- Geniş renk paleti seçenekleri
- Renklerin RGB, HEX veya HSL değerlerini görüntüleme ve kopyalama
- Favori renklerinizi keşfetme
- Renk kombinasyonları oluşturma ve istediğiniz gibi kullanma


Renk Paleti uygulamamızı kullanarak, tasarımlarınızı canlandırabilir, duvarlarınızı boyayabilir, kıyafetlerinizi seçebilir veya sadece renklerin güzelliklerini keşfedebilirsiniz. Sınırsız yaratıcılığınızı ortaya çıkarmak için size ilham vermek için buradayız. `}
		</Spoiler>
	)
}

export default Spoilers
