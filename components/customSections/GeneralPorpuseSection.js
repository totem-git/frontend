import Variant1 from "./GeneralPorpuseSectionVariants/Variant1"
import Variant2 from "./GeneralPorpuseSectionVariants/Variant2"
import Variant3 from "./GeneralPorpuseSectionVariants/Variant3"
import Variant4 from "./GeneralPorpuseSectionVariants/Variant4"
import Variant4_Reverse from "./GeneralPorpuseSectionVariants/Variant4_Reverse"

const variants = {
    variant_1: Variant1,
    variant_2: Variant2,
    variant_3: Variant3,
    variant_4: Variant4,
    variant_4_reverse: Variant4_Reverse,
}

const GeneralPorpuseSection = ({ data }) => {
    const Section = variants[data.variant] ?? variants.variant_1
    return <Section data={data} />
}

export default GeneralPorpuseSection
