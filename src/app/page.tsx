"use client"

import React, { useState } from 'react';
import Header from "./components/Header";
import Image from 'next/image';
import { ArrowRight, ArrowRightToLine, ChevronRight, Heart } from 'lucide-react';
import ClickableImage from './components/ClickableImage';

import donut_2 from '../../public/donut_2.png';
import best_seller_donut_1 from '../../public/bg-donut-1.jpg';


export default function Home() {
  return (
    <div className="bg-orange-50/50 font-sans">
      <Header />
      <main className="">

        {/* hero */}
        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 text-center md:text-left z-10">
                <div className="inline-flex items-center">
                  <Image src={donut_2} alt="Donut Icon" className="w-16 h-16 sm:w-20 sm:h-20 -rotate-8" />
                  <span className="bg-secondary px-4 py-1 rounded-full text-pink-500 font-semibold shadow-md">
                    Best Donut in a town!
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Make funnier <br /> life with{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">sweet</span>
                    <svg
                      className="absolute  w-full h-auto"
                      viewBox="0 0 202 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3.30887 27.2931C4.00023 27.2621 5.39343 27.1997 16.1888 24.2695C25.9951 21.6077 44.3951 15.666 54.7629 12.6808C69.8565 8.33487 76.2315 7.96271 82.1356 6.67263C84.8771 6.07361 87.7017 5.80549 97.547 4.74672C121.493 2.17158 135 3.5 144.307 4.49393C152.499 5.36888 155.448 6.99723 161.5 9C167.034 10.8314 180.171 16.0609 185.35 18.5105C190.151 20.9523 194.131 22.8625 196.257 23.5891C197.329 23.9551 198.384 24.3156 198.424 24.734"
                        stroke="#E19859"
                        strokeWidth="6"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>{" "}
                  <br />
                  <span className="text-pink-500">donut!</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                  Nikmati donat empuk dan lezat dengan berbagai topping pilihan yang akan mencerahkan harimu. Dibuat dengan cinta dan bahan-bahan berkualitas.
                </p>
                <div className="mt-8">
                  <button className="bg-primary text-white px-6 py-3 sm:px-8 rounded-xl inline-flex items-center gap-2 font-bold text-base sm:text-lg hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg">
                    Explore Produk Kami <ArrowRight size={20} className="inline-block" />
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 relative mt-10 md:mt-0">
                <Image
                  src={donut_2}
                  alt="Pink glazed donut with sprinkles"
                  className="w-full h-auto rounded-3xl"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/fecaca/db2777?text=Delicious+Donut'; }}
                />

                <div className="absolute top-4 left-4 sm:top-8 md:top-12 lg:top-16 bg-white/90 p-3 rounded-lg rounded-tl-[2rem] rounded-br-[2rem] shadow-md border border-primary text-center backdrop-blur-sm">
                  <p className="text-pink-500 bg-secondary border border-secondary-outline lg:p-4 p-3 rounded-tl-[2rem] rounded-br-[2rem] font-bold lg:text-2xl sm:text-xl">100%</p>
                  <p className="font-hand-writing text-primary mt-2 text-xl sm:text-2xl">halal</p>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-8 md:bottom-12 lg:bottom-16 border border-primary shadow-md bg-white/95 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-tl-[2rem] rounded-br-[2rem] flex items-center gap-2">
                  <p className="font-hand-writing text-primary me-4 text-lg sm:text-xl md:text-2xl">
                    full handmade
                  </p>
                  <div className="bg-secondary flex flex-row gap-3 text-red-500 border border-secondary-outline p-3 rounded-tl-[2rem] rounded-br-[2rem]">
                    With <Heart className="  fill-red-500 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Section */}
        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="flex flex-col text-center mx-auto px-4 mb-12">
            <span className="bg-secondary px-4 py-1 rounded-full text-xl text-pink-500 font-semibold shadow-md w-fit mx-auto">
              Produk Best Seller
            </span>
            <h1 className="font-bold text-5xl mt-4">
              Menu Paling <span className="text-primary">Populer</span>
            </h1>
            <p className="max-w-md mx-auto mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quibusdam autem dicta nisi voluptatum voluptatem aut repellat velit quaerat fugiat.s!
            </p>
          </div>

          <div className="container mx-auto grid h-[45rem] grid-cols-6 grid-rows-3 gap-4 px-4 sm:px-6 lg:px-8">

            {/* --- Main Feature Image --- */}
            <div className="col-span-4 row-span-2 overflow-hidden rounded-br-[4rem] rounded-tl-[4rem]">
              <ClickableImage
                src={best_seller_donut_1}
                alt="A delicious Tiramisu Bomboloni"
                onClick={() => alert("Tiramisu Donut clicked!")}
                badgeText="#Top 1 Best Seller"
                title="Bomboloni Tiramissu"
                description="Our signature fluffy bomboloni filled with a rich and creamy tiramisu cream, dusted with cocoa."
                buttonText="Beli Sekarang"
              />
            </div>

            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl rounded-br-[4rem] rounded-tl-[4rem]">
              <ClickableImage
                src={best_seller_donut_1}
                alt="Classic Glazed Donut"
                onClick={() => alert("Classic Glazed clicked!")}
                badgeText="New Flavor!"
                title="Classic Glazed"
                description="A timeless classic, perfectly sweet and fluffy."
                buttonText={<ArrowRightToLine size={20} />}
              />
            </div>

            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl rounded-br-[4rem] rounded-tl-[4rem]">
              <ClickableImage
                src={best_seller_donut_1}
                alt="Chocolate Sprinkle Donut"
                onClick={() => alert("Choco Sprinkle clicked!")}
                title="Choco Sprinkles"
                badgeText="New Flavor!"
                description="Rich chocolate frosting with colorful sprinkles."
                buttonText={<ArrowRightToLine size={20} />}
              />
            </div>

            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
              <ClickableImage
                src={best_seller_donut_1}
                alt="Strawberry Frosted Donut"
                onClick={() => alert("Strawberry Frosted clicked!")}
                badgeText="New Flavor!"
                title="Strawberry Frosted"
                description="Sweet strawberry icing on our classic donut."
                buttonText={<ArrowRightToLine size={20} />}
              />
            </div>

            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
              <ClickableImage
                src={best_seller_donut_1}
                alt="Blueberry Filled Donut"
                onClick={() => alert("Blueberry Filled clicked!")}
                title="Blueberry Filled"
                badgeText="New Flavor!"
                description="Bursting with real blueberry filling."
                buttonText={<ArrowRightToLine size={20} />}
              />
            </div>

            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
              <ClickableImage
                src={best_seller_donut_1}
                alt="Caramel Latte Donut"
                badgeText="New Flavor!"
                onClick={() => alert("Caramel Latte clicked!")}
                title="Caramel Latte"
                description="A perfect blend of coffee and sweet caramel."
                buttonText={<ArrowRightToLine size={20} />}
              />
            </div>
          </div>

        </section>

        {/* tentang kami */}
        <section className="relative overflow-hidden py-12 md:py-24 bg-primary-dim">
          <div className="flex flex-col text-center mx-auto px-4 mb-12">
            <span className="bg-secondary px-4 py-1 rounded-full text-xl text-pink-500 font-semibold shadow-md w-fit mx-auto">
              Tentang Kami
            </span>
            <h1 className="font-bold text-5xl mt-4">
              Tim dibalik <span className="text-primary">Bomboskuy</span>
            </h1>
            <p className="max-w-md mx-auto mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quibusdam autem dicta nisi voluptatum voluptatem aut repellat velit quaerat fugiat.s!
            </p>
          </div>


          <div className="container mx-auto flex lg:flex-row flex-col gap-12 justify-center">
            <div className="w-96 rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
              <Image
                src={donut_2}
                alt="Akbar Zahron"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-primary text-white">
                <h3 className="text-3xl font-semibold">Akbar Zahron</h3>
                <p className="text-md underline">Chief Executive Officer</p>
              </div>
            </div>
            <div className="w-96 rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
              <Image
                src={donut_2}
                alt="Akbar Zahron"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-primary text-white">
                <h3 className="text-3xl font-semibold">Akbar Zahron</h3>
                <p className="text-md underline">Chief Executive Officer</p>
              </div>
            </div>
            <div className="w-96 rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
              <Image
                src={donut_2}
                alt="Akbar Zahron"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-primary text-white">
                <h3 className="text-3xl font-semibold">Akbar Zahron</h3>
                <p className="text-md underline">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </section>


        {/* Berita */}
        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="flex flex-col text-center mx-auto px-4 mb-12">
            <span className="bg-secondary px-4 py-1 rounded-full text-xl text-pink-500 font-semibold shadow-md w-fit mx-auto">
              Artikel Terbaru
            </span>
            <h1 className="font-bold text-5xl mt-4">
              Berita dan <span className="text-primary">Update</span>
            </h1>
            <p className="max-w-md mx-auto mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quibusdam autem dicta nisi voluptatum voluptatem aut repellat velit quaerat fugiat.s!
            </p>
          </div>


          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-row h-96 rounded-lg">
            <ClickableImage
              src={best_seller_donut_1}
              alt="Blueberry Filled Donut"
              badgeText='New Flavor!'
              onClick={() => alert("Blueberry Filled clicked!")}
              title="Blueberry Filled"
              description="Bursting with real blueberry filling."
              buttonText={<ArrowRightToLine size={20} />}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-row h-96 rounded-lg mt-12">
            <div className="w-full flex lg:flex-row flex-col justify-between gap-6">
              <div className="w-full h-fit rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
                <Image src={best_seller_donut_1} alt="Akbar Zahron" className="w-full h-64 object-cover" />
                <div className="p-4 text-start">
                  <h3 className="text-2xl font-bold underline mb-3">Berita Bomboskuy berbagi</h3>
                  <p className="text-md text-zinc-500 mb-3">Lorem ipsum dolor sit amet , aspernatur. Ut, perferendis eligendi.</p>
                  <a href="" className="text-primary font-bold">Read More <ChevronRight className="inline" /></a>
                </div>
              </div>
              <div className="w-full h-fit rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
                <Image src={best_seller_donut_1} alt="Akbar Zahron" className="w-full h-64 object-cover" />
                <div className="p-4 text-start">
                  <h3 className="text-2xl font-bold underline mb-3">Berita Bomboskuy berbagi</h3>
                  <p className="text-md text-zinc-500 mb-3">Lorem ipsum dolor sit amet , aspernatur. Ut, perferendis eligendi.</p>
                  <a href="" className="text-primary font-bold">Read More <ChevronRight className="inline" /></a>
                </div>
              </div>
              <div className="w-full h-fit rounded-2xl overflow-hidden shadow-lg bg-white text-center border-6 border-white rounded-br-[3rem] rounded-tl-[3rem]">
                <Image src={best_seller_donut_1} alt="Berita Bomboskuy berbagi" className="w-full h-64 object-cover" />
                <div className="p-4 text-start">
                  <h3 className="text-2xl font-bold underline mb-3">Berita Bomboskuy berbagi</h3>
                  <p className="text-md text-zinc-500 mb-3">Lorem ipsum dolor sit amet , aspernatur. Ut, perferendis eligendi.</p>
                  <a href="" className="text-primary font-bold">Read More <ChevronRight className="inline" /></a>
                </div>
              </div>
            </div>
          </div>



        </section>

        {/* <PopularMenuSection />
        
        <NewsSection />
        <PartnerSection />
        <SupportSection />
        <HappinessSection />
        <ConnectSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
