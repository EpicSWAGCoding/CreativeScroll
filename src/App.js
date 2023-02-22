import { useEffect } from 'react';
import './App.css';
import images from './assets/images';

import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {

  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {

      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
      })

      gsap.fromTo('.hero-section', { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
          }
        })

      let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

      itemsL.forEach(item => {
        gsap.fromTo(item, { x: -50, opacity: 0 }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        })
      })

      let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

      itemsR.forEach(item => {
        gsap.fromTo(item, {x: 50, opacity: 0}, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        })
      })
    }
  })

  return (
    <div className='wrapper'>
      <div className='content'>
        <header className='hero-section'>
          <img data-speed=".6" className='hero' src={images.hero} alt="hero" />
          <div className='conteiner'>
            <div data-speed=".75" className='main-header'>
              <h1 className='main-title'>creative scroll</h1>
            </div>
          </div>
        </header>
        <div className='portfolio'>
          <div className='conteiner'>
            <div className='gallery'>
              <div data-speed=".9" className='gallery__left'>
                <img className='gallery__item' src={images.img1} alt="work1" />
                <img className='gallery__item' src={images.img2} alt="work2" />
                <div className='text-block gallery__item'>
                  <h2 className='text-block__h'>Creative floating scroll with amazing parallax effect</h2>
                  <p className='text-block__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    labore hic
                    quae aliquid ullam corporis.</p>
                </div>
                <img className='gallery__item' src={images.img3} alt="work6" />
              </div>
              <div data-speed="1.1" className='gallery__right'>
                <div className='text-block gallery__item'>
                  <h2 className='text-block__h'>Creative floating scroll with amazing parallax effect</h2>
                  <p className='text-block__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    labore hic
                    quae aliquid ullam corporis.</p>
                </div>
                <img className='gallery__item' src={images.img4} alt="work4" />
                <img className='gallery__item' src={images.img5} alt="work5" />
                <img className='gallery__item' src={images.img6} alt="work3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
