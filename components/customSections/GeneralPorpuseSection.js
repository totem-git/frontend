import Variant1 from "./GeneralPorpuseSectionVariants/Variant1";
import Variant2 from "./GeneralPorpuseSectionVariants/Variant2";
import Variant3 from "./GeneralPorpuseSectionVariants/Variant3";
import Variant4 from "./GeneralPorpuseSectionVariants/Variant4";
import Variant4_Reverse from "./GeneralPorpuseSectionVariants/Variant4_Reverse";
import Variant5 from "./GeneralPorpuseSectionVariants/Variant5";
import Variant6 from "./GeneralPorpuseSectionVariants/Variant6";
import Variant6_Reverse from "./GeneralPorpuseSectionVariants/Variant6_Reverse";
import Variant7 from "./GeneralPorpuseSectionVariants/Variant7";
import Variant8 from "./GeneralPorpuseSectionVariants/Variant8";
import Variant9 from "./GeneralPorpuseSectionVariants/Variant9";

const variants = {
  variant_1: Variant1,
  variant_2: Variant2,
  variant_3: Variant3,
  variant_4: Variant4,
  variant_4_reverse: Variant4_Reverse,
  variant_5: Variant5,
  variant_6: Variant6,
  variant_6_reverse: Variant6_Reverse,
  variant_7: Variant7,
  variant_8: Variant8,
  variant_9: Variant9,
};

const GeneralPorpuseSection = ({ data, prependBreadcrumbs }) => {
  const Section = variants[data.variant] ?? variants.variant_1;
  return <Section data={data} prependBreadcrumbs={prependBreadcrumbs} />;
};

export default GeneralPorpuseSection;
