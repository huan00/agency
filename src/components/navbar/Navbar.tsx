import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('available for work')
  }

  const handleModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const getTime = () => {
    const date = new Date()
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      // year: 'numeric',
      // month: 'numeric',
      // day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
      // second: 'numeric'
    }).format(date)
  }
  console.log(getTime())
  return (
    <div className="agency__navbar agency__padding">
      <div className="agency__navbar__logo">
        <p>Other Days</p>
      </div>
      <div className="agency__navbar__status">
        <div />
        <p onClick={handleCopy}>Available for work</p>
      </div>
      <div
        className="agency__navbar__service"
        onClick={handleModal}
        style={{ color: `${isModalVisible ? 'white' : 'black'}` }}
      >
        <p>Services</p>
        <div className="agency__navbar__location">
          <p>NYC--</p>
          <p>{getTime()}</p>
        </div>
      </div>
      <div
        className="agency__navbar__modal"
        style={{ display: `${isModalVisible ? 'flex' : 'none'}` }}
        onClick={handleModal}
      >
        <div className="modal-description">
          <p className="modal--title">People with hands on experience</p>
          <p>
            Having a small but mighty team with a wide perspective and insights
            into various industries based on our past lives. We worked with, or
            worked in a few spaces that allows us to provide the expertise
          </p>
        </div>
        <div className="modal-background">
          <p className="modal--title">Background</p>
          <p>Beauty</p>
          <p>Fashion & Lifestyle</p>
          <p>Recruiting</p>
          <p>FinTech</p>
          <p>PropTech</p>
          <p>eCommerce</p>
          <p>Sales & Telecommunication</p>
          <p>Food & Beverage</p>
        </div>
        <div className="modal-work">
          <p className="modal--title">Doing</p>
          <p>Brand Identity and Strategy</p>
          <p>Marketing</p>
          <p>UI/Visual Design</p>
          <p>UX/Experience/Product Design</p>
          <p>Product Strategy</p>
          <p>Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
