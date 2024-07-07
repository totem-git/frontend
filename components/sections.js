import { useRouter } from "next/router";
import Hero from "@/components/sections/hero";
import LargeVideo from "@/components/sections/large-video";
import FeatureColumnsGroup from "@/components/sections/feature-columns-group";
import FeatureRowsGroup from "@/components/sections/feature-rows-group";
import BottomActions from "@/components/sections/bottom-actions";
import TestimonialsGroup from "@/components/sections/testimonials-group";
import RichText from "./sections/rich-text";
import Pricing from "./sections/pricing";
import LeadForm from "./sections/lead-form";
import CardsList from "./customSections/CardsList";
import CardsList2 from "./customSections/CardsList2";
import GeneralPorpuseSection from "./customSections/GeneralPorpuseSection";
import Separator from "./customSections/Separator";
import Slider from "./customSections/Slider";
import SpecialHero from "./customSections/SpecialHero";
import ResortMap from "./customSections/ResortMap";
import GeoInfo from "./customSections/GeoInfo";
import EmploymentForm from "./customSections/EmploymentForm";
import FishingReportsSection from "./customSections/FishingReportsSection";
import RestaurantMenuSection from "./customSections/RestaurantMenuSection";
import ArticleHero from "./customSections/ArticleHero";
import ArticlesList from "./customSections/ArticlesList";
import FeatureList from "./customSections/FeatureList";
import { Fragment } from "react";
import CancellationPolicy from "./customSections/CancellationPolicy";
import IceCastleCardList from "./customSections/IceCastleCardList";
import GoogleReviewsCard from "./customSections/GoogleReviewsCard";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.testimonials-group": TestimonialsGroup,
  "sections.rich-text": RichText,
  "sections.pricing": Pricing,
  "sections.lead-form": LeadForm,
  "sections.cards-list": CardsList,
  "sections.general-porpuse-section": GeneralPorpuseSection,
  "sections.dinamic-separator": Separator,
  "sections.slider": Slider,
  "sections.special-hero": SpecialHero,
  "sections.resort-map": ResortMap,
  "sections.geo-info": GeoInfo,
  "sections.cards-list2": CardsList2,
  "sections.employment-form": EmploymentForm,
  "sections.fishing-reports-section": FishingReportsSection,
  "sections.restaurant-menu-section": RestaurantMenuSection,
  "sections.article-hero": ArticleHero,
  "sections.articles-list": ArticlesList,
  "sections.feature-list": FeatureList,
  "sections.cancellation-policy": CancellationPolicy,
  "sections.ice-castle-card-list": IceCastleCardList,
  "sections.google-reviews": GoogleReviewsCard,
};

// Display a section individually
const Section = ({ sectionData, prependBreadcrumbs }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return (
    <SectionComponent
      data={sectionData}
      prependBreadcrumbs={prependBreadcrumbs}
    />
  );
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="bg-red-600 py-4 font-semibold uppercase tracking-wide text-red-100">
      <div className="container">
        Preview mode is on.{" "}
        {/* <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a> */}
      </div>
    </div>
  );
};

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div id="contentSections" className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section, index) => (
        <Fragment key={`${section.__component}${section.id}`}>
          <Section sectionData={section} prependBreadcrumbs={index === 1} />
        </Fragment>
      ))}
    </div>
  );
};

export default Sections;
