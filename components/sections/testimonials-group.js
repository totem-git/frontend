import Image from "next/image"
import { getStrapiMedia } from "utils/media"
import CustomLink from "../elements/custom-link"
import RatingStars from "../elements/RatingStars"

const TestimonialsGroup = ({ data }) => {
  return (
    <section className="text-center text-lg bg-white pt-12 pb-16">
      <h4 className="text-4xl text-primary-600 font-russo">{data.title}</h4>
      <p className="text-gray-600 font-normal mx-auto mt-8 px-6 max-w-3xl">{data.description}</p>
      <div className="flex flex-wrap justify-center px-8 mt-12">
        {data.testimonials.map((testimonial, i) => (
          <div key={i} className="flex flex-col bg-light-grey-blue w-72 min-w-[288px] mx-3 mb-4 pt-4 pb-6 px-6">
            <p className="text-sm text-gray-500 font-medium">{testimonial.text}</p>
            <div className="px-10 mt-auto pt-4">
              <div className="overflow-hidden rounded-full aspect-square flex">
                <Image src={getStrapiMedia(testimonial.picture.url)} objectFit="cover" width={testimonial.picture.width} height={testimonial.picture.height} />
              </div>
            </div>
            <p className="text-primary-600 text-xl font-russo uppercase mt-6">{testimonial.authorName}</p>
            <p className="text-sm font-bold">{testimonial.authorName}</p>
            <div className="flex justify-center w-full mt-4">
              <RatingStars rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <CustomLink link={data.link}>
          <span className="underline font-medium text-gray-700 hover:text-primary-600">{data.link.text}</span>
        </CustomLink>
      </div>
    </section>
  )
}

export default TestimonialsGroup
