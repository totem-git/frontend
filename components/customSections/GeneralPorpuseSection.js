import Variant1 from "./GeneralPorpuseSectionVariants/Variant1"
import Variant2 from "./GeneralPorpuseSectionVariants/Variant2"

const variants = {
    variant_1: Variant1,
    variant_2: Variant2,
}

const GeneralPorpuseSection = ({ data }) => {
    const Section = variants[data.variant] ?? variants.variant_1
    return <Section data={data} />
}

export default GeneralPorpuseSection
