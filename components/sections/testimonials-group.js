import Image from "next/image"
import { getStrapiMedia } from "utils/media"
import CustomLink from "../elements/custom-link"

const TestimonialRating = ({ rating }) => {
  let output = []

  for (let i = 0; i < rating; i++) {
    output.push((
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return output
}

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
            <div className="flex justify-center w-full text-primary-600 mt-4">
              <TestimonialRating rating={testimonial.rating} />
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
