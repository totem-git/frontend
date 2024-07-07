import React, { useEffect, useRef, useState } from "react";

const GoogleReviewsCard = () => {
  const [reviews, setReviews] = useState([]);
  const [generalReview, setGeneralReview] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const detailsUrl = `/api/google-reviews`;
    fetch(detailsUrl)
      .then((res) => res.json())
      .then(({ data }) => {
        if (data.result && data.result.reviews) {
          const totemReview = data.result.rating;
          const filteredReviews = data.result.reviews.filter(
            (review) => review.rating > 4
          );
          setReviews(filteredReviews.slice(0, 5));
          setGeneralReview(totemReview);
        }
      })
      .catch((err) => {
        console.error("Error fetching place details:", err);
      });
  }, []);
  // Truncar texto
  const truncateText = (text, maxLength) => {
    if (text != undefined) {
      if (text.length <= maxLength) return text;
    } else {
      return "";
    }

    const truncated = text.substring(0, maxLength);
    const ultimoPunto = truncated.lastIndexOf(".");
    if (ultimoPunto !== -1) {
      return truncated.substring(0, ultimoPunto + 1) + "...";
    }
    return truncated + "..";
  };
  //renderizar estrellas.
  const renderStars = (rating) => {
    if (rating == undefined) return;
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;
    const halfStar = decimal >= 0.3 && decimal <= 0.5 ? 1 : 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <img key={i} src="/imgs/estrella.png" alt="estrellas" />
        ))}
        {halfStar === 1 && (
          <img src="/imgs/media-estrella.png" alt="estrellas" />
        )}
      </>
    );
  };
  //Manejar Slides MOBILE
  const previous = () => {
    const condition = selectedIndex > 0; // minimo
    const nextIndex = condition ? selectedIndex - 1 : reviews.length - 1;
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < reviews.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(nextIndex);
  };
  //Manejar Slides DESKTOP
  const handleSlide = (direction) => {
    const skipAmount = innerWidth >= 1024 ? 2 : 1;
    const slidesCount = reviews.length;
    const scrollAmount = Math.floor(
      sliderRef.current.getBoundingClientRect().width / skipAmount
    );
    const currentScrollPosition = sliderRef.current.scrollLeft;
    const currentPosition = Math.floor(currentScrollPosition / scrollAmount);

    const slideSteps = [];
    for (let i = 0; i < slidesCount - (skipAmount - 1); i++) {
      slideSteps.push(Math.floor(scrollAmount * i));
    }

    let nextPosition = currentPosition + direction * skipAmount;
    nextPosition = Math.max(0, Math.min(nextPosition, slideSteps.length - 1));

    const targetScrollPosition = slideSteps[nextPosition];
    sliderRef.current.scrollTo({
      left: targetScrollPosition,
      behavior: "smooth",
    });
  };
  // forma correcta de verificar
  if (reviews.length == 0) return null;

  return (
    <div className="bg-[#E6EEF7] font-russo">
      {/* para mobile y desktop mostrar distinto */}
      {/* reviews General - MOBILE */}
      {/* reviews General - DESKTOP */}
      <div className="px-10 py-2 pt-10 text-center text-[#FEB127] lg:flex lg:items-center lg:justify-between">
        <h2 className="mb-2 flex justify-center text-lg md:mb-0 md:text-xl xl:text-2xl">
          TOTEM RESORTS ON GOOGLE
          <span className="text-center lg:ml-2 lg:flex">
            &nbsp;{generalReview}
          </span>
        </h2>
        <div className="flex h-auto justify-center">
          <span className="flex space-x-2 xl:h-6 xl:w-36">
            {" "}
            {renderStars(generalReview)}
          </span>
        </div>
      </div>
      <div className="px-10 py-2 text-center text-lg text-[#5A5A5A] lg:text-left">
        LAST REVIEWS:
      </div>
      {/* *** MOBILE *** */}

      <div className="relative lg:hidden">
        {reviews.length > 1 && (
          <>
            <button
              onClick={previous}
              className="absolute top-1/2 left-0 h-10 w-12 -translate-y-1/2 transform p-1 md:h-16 md:w-16 md:p-2"
            >
              <img src="/imgs/flecha-izquierda.png" alt="flecha izquierda" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-0 h-10 w-12 -translate-y-1/2 transform p-1 md:h-16 md:w-16 md:p-2"
            >
              <img src="/imgs/flecha-derecha.png" alt="flecha derecha" />
            </button>
          </>
        )}

        <div className="mx-auto flex h-[250px] w-[280px] flex-shrink-0 flex-col justify-start rounded-lg bg-white sm:w-[400px] md:h-[300px] md:w-[480px]">
          {/* card header */}
          <div className="flex items-center space-x-5 px-10 py-8">
            <img
              className="rounded-full"
              src={reviews[selectedIndex].profile_photo_url}
              alt="foto-perfil"
              style={{ width: "50px", height: "50px" }}
            />
            <p className="ml-4 overflow-hidden  text-[#505452]">
              {reviews[selectedIndex]?.author_name}
            </p>
            <div className="ml-auto mr-4 flex-shrink-0">
              <img
                className="rounded-full"
                src="/imgs/google-icon.png"
                alt="google-img"
              />
            </div>
          </div>
          {/* card body */}
          <div className="flex-grow overflow-hidden px-10 font-roboto text-sm leading-tight text-[#505452]">
            {truncateText(reviews[selectedIndex].text, 180)}
          </div>
          {/* card footer */}
          <div className="mt-auto flex space-x-8 py-6 px-10">
            <span className="flex space-x-2">
              {renderStars(reviews[selectedIndex].rating)}
            </span>
          </div>
        </div>
      </div>

      {/* *** DESKTOP *** */}
      <div className="relative hidden lg:flex">
        {reviews.length > 1 && (
          <>
            <button
              onClick={() => handleSlide(-1)}
              className="absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 transform p-4"
            >
              <img src="/imgs/flecha-izquierda.png" alt="flecha izquierda" />
            </button>
            <button
              onClick={() => handleSlide(1)}
              className="absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 transform p-4"
            >
              <img src="/imgs/flecha-derecha.png" alt="flecha derecha" />
            </button>
          </>
        )}
        <div
          ref={sliderRef}
          className="no-scrollbar flex space-x-8 overflow-x-scroll px-2 py-10"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mx-2 flex w-[480px] flex-shrink-0 flex-col justify-start rounded-lg bg-white"
            >
              {/* card header */}
              <div className="flex items-center space-x-5 px-10 py-8">
                <img
                  className="rounded-full"
                  src={review.profile_photo_url}
                  alt="foto-perfil"
                  style={{ width: "50px", height: "50px" }}
                />
                <p className="ml-4 text-[#505452]">{review.author_name}</p>
                <div className="ml-auto mr-4 flex-shrink-0">
                  <img
                    className="rounded-full"
                    src="/imgs/google-icon.png"
                    alt="google-img"
                  />
                </div>
              </div>
              {/* card body */}
              <div className="flex-grow overflow-hidden px-10 font-roboto text-sm leading-tight text-[#505452]">
                {truncateText(review.text, 225)}
              </div>
              {/* card footer */}
              <div className="mt-auto flex justify-center py-6 px-10">
                <p className="">Rating</p>
                <span className="ml-auto flex items-center space-x-2">
                  {renderStars(review.rating)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.google.com/maps/place/?q=place_id:ChIJ0dLyfMHIvVIR88fEc6LtqOI"
        rel="noopener"
        target="_blank"
        className="mt-4 flex justify-center space-x-4 pb-6"
      >
        <p className="uppercase underline">see on google</p>
        <img
          className="h-auto object-contain"
          src="/imgs/flecha.png"
          alt="flecha"
        />
      </a>
    </div>
  );
};

export default GoogleReviewsCard;
