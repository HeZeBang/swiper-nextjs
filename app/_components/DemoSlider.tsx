"use client"; // <===== REQUIRED

import React, { useCallback, useEffect } from "react";

// Swiper components, modules and styles
import { Autoplay, EffectCards, EffectCoverflow, HashNavigation, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slides from "@/app/slides/demo";

// Our custom button component
import SliderButtons from "./SliderButtons";
import { Globe } from "@/components/magicui/globe";
import Universe from "@/components/magicui/universe";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperClass | null>(null);
  const nextBtn = React.useRef<HTMLDivElement>(null);
  const prevBtn = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('keyPress', (swiper, key) => {
        console.log("Key pressed:", key, typeof key);
        if (Number(key) === 32) {
          swiper.slideNext(); // Slide to the next slide
        }
      });
    }
  }, [swiperInstance])

  useEffect(() => {
    if (swiperInstance) {
      setCurrentSlide(swiperInstance.activeIndex);
      swiperInstance.on('slideChange', () => {
        setCurrentSlide(swiperInstance.activeIndex);
      });
    }
  }, [swiperInstance]);

  // const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
  //   console.log("Key pressed:", event.key);
  //   if (event.key === "Space") {
  //     event.preventDefault(); // Prevent default spacebar scroll behavior
  //     if (swiperInstance) {
  //       swiperInstance.slideNext(); // Slide to the next slide
  //     }
  //   }
  // }, [swiperInstance]);

  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            onSwiper={setSwiperInstance}
            // onKeyDown={handleKeyDown}
            tabIndex={0}
            navigation={{
              enabled: true,
              nextEl: nextBtn.current,
              prevEl: prevBtn.current
            }}
            pagination={{ type: "progressbar", clickable: true }}
            keyboard={{ enabled: true, }}
            effect="cards"
            speed={500}
            autoplay={false}
            loop={false}
            hashNavigation={true}
            modules={[Autoplay, Navigation, Pagination, Keyboard, EffectCards, HashNavigation]}
          >
            <div className="absolute right-5 bottom-5 z-10 rounded-full bg-[#f0f0f0aa] backdrop:blur-md p-2 flex items-center gap-2 border-outline border backdrop-blur-xl backdrop-saturate-200">
              <div ref={prevBtn} className="cursor-pointer" onClick={() => swiperInstance?.slidePrev()}>
                <ChevronLeft className="aspect-square w-8 h-8 rounded-full p-1 border hover:bg-white active:scale-95 transition-all"/>
              </div>
              {/* <span>{currentSlide}</span> */}
              <AnimatedCounter value={currentSlide || 0} className="bg-[#f0f0f0aa]" />
              <div ref={nextBtn} className="cursor-pointer" onClick={() => swiperInstance?.slideNext()}>
                <ChevronRight className="aspect-square w-8 h-8 rounded-full p-1 border hover:bg-white active:scale-95 transition-all"/>
              </div>
            </div>
            <SwiperSlide key="cover" data-hash="cover" className="bg-white p-24 overflow-hidden">
              <div className="items-start justify-center flex w-full h-full gap-5 flex-col">
                <h1 className="text-7xl font-extrabold z-20">
                  Fullstack 101
                </h1>
                <span className="text-3xl">A Coffee With Pie</span>
              </div>
              <Universe />
            </SwiperSlide>
            {
              slides.map((slide, index) => (
                <SwiperSlide key={index} data-hash={`slide-${index}`} className={cn("bg-white p-24 overflow-scroll")}>
                  <h2 className="text-5xl font-bold mb-4 sticky">{slide.title}</h2>
                  {slide.content}
                </SwiperSlide>
              ))
            }
            {/* {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id} data-hash={id}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            ))} */}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
