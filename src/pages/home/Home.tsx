import React, { useEffect, useRef, useState } from 'react'
import './home.css'

import { companyList } from '../../constants/companyList'

const Home = () => {
  const imgRef = useRef<any>(null)
  const [overlayHeight, setOverlayHeight] = useState<number>(20)
  const [isActive, setIsActive] = useState<any>(companyList[0])

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

  const handleMouseEnter = (company: any) => {
    imgRef?.current?.childNodes.forEach((child: any) => {
      if (child.getAttribute('data-company-type') === company.company) {
        child.classList.toggle('is-active')
        setIsActive(company)
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
        {companyList.map((company, index) => (
          <div
            style={{ '--i': index } as React.CSSProperties}
            className={`agency__home__imgs ${index === 0 ? 'is-active' : ''} `}
            key={index}
            data-company-type={company.company}
            onMouseEnter={() => handleMouseEnter(company)}
          >
            <img src={company.imgUrl} alt={company.company} />
          </div>
        ))}
      </div>
      <div className="agency__footer">
        <div>
          <p>{isActive.work}</p>
          <p>{isActive.desc}</p>
          <h1>
            {isActive.company} -- {isActive.company_desc}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
