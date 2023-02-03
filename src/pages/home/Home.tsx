import e from 'express'
import React, { useEffect, useRef, useState } from 'react'
import './home.css'

import img1 from '../../assets/process1.jpg'
import img2 from '../../assets/process2.jpg'
import img3 from '../../assets/process3.jpg'

const Home = () => {
  const imgRef = useRef<any>(null)
  const [overlayHeight, setOverlayHeight] = useState<number>(20)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const el = document.querySelector('.agency__home__desc')
    if (el) {
      el.addEventListener('scroll', () => {
        if (el.getBoundingClientRect().height < window.innerHeight / 2) {
          setOverlayHeight((overlayHeight) => overlayHeight + 0.5)
          el.scrollTop = 0
        }

        if (
          el.getBoundingClientRect().height > window.innerHeight / 2 &&
          el.scrollTop === 0
        ) {
          setOverlayHeight(20)
        }
      })
    }
  }, [])

  const handleMouseEnter = (company: string) => {
    imgRef?.current?.childNodes.forEach((child: any) => {
      if (child.getAttribute('data-company-type') === company) {
        child.classList.toggle('is-active')
      } else {
        child.classList.remove('is-active')
      }
    })
  }

  return (
    <div className="agency__home agency__padding">
      <div className="agency__home__content">
        <h1>Helping startups ideate, iterate, and grow</h1>
        <div
          className="agency__home__desc"
          style={{
            height:
              overlayHeight > 20 && overlayHeight <= 70
                ? overlayHeight + '%'
                : overlayHeight + '%'
          }}
        >
          <section>
            <p className="section__title">Strives</p>
            <p className="section__text">
              We work with companies from startup and beyond to deliver an
              own-able brand, lovable product, and innovative solution, tailored
              to their company stage and developing goals
            </p>
          </section>
          <section>
            <p className="section__title">Approach</p>
            <p className="section__text">
              Bringing your idea to life:: Your creative arm, logical voice,
              mindful partner that is invested in defining who you are as a
              company, exposing opportunities, and developing method of
              achieving goals. Bringing your idea to life. Ideation and
              Strategy. Refining or defining vision Uncovering opportunities::
              Making a product, experience, or metric better through purposeful
              iteration. We help discovery opportunities through research,
              prioritization off of company goals, and ensure measurable
              successes. Discovery and Iteration. Performance-driven. Unlocking
              opportunities. Proactively problem-solving:: There’s designing for
              today, and there’s designing with the future in mind. Our approach
              encompasses not just who you are as a company at this moment, but
              also architecting for how your business will grow. We analyze the
              industry to be the mindful strategic partner. Scalability and
              Growth
            </p>
          </section>
        </div>
      </div>

      <div className="agency__home__hero " ref={imgRef}>
        <div
          className={`agency__home__imgs is-active`}
          data-company-type="one"
          onMouseEnter={() => handleMouseEnter('one')}
        >
          <img src={img1} alt="1" />
        </div>
        <div
          className={`agency__home__imgs`}
          data-company-type="two"
          onMouseEnter={() => handleMouseEnter('two')}
        >
          <img src={img2} alt="2" />
        </div>
        <div
          className={`agency__home__imgs`}
          data-company-type="three"
          onMouseOver={() => handleMouseEnter('three')}
        >
          <img src={img3} alt="3" />
        </div>
      </div>
      <div className="agency__footer">
        <p>Branding</p>
        <p>Website Design and Development</p>
        <h1>Devise -- Recruiting & Staffing</h1>
      </div>
    </div>
  )
}

export default Home
