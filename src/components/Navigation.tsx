import { FaBars } from 'react-icons/fa'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import SideBarMenus from './sidebar/SideBarMenu'

const Navigation = () => {
  const { width } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <React.Fragment>
          <FaBars onClick={() => setShowMenu(true)} />

          <ReactModal
            isOpen={showMenu}
            onRequestClose={() => setShowMenu(false)}
            shouldCloseOnOverlayClick={true}
          >
            <SideBarMenus />
          </ReactModal>
        </React.Fragment>
      )
    } else {
      return null
    }
  }

  return (
    <nav className="navigation">
      {getMobileMenu()}
      <strong>SuperForum</strong>
    </nav>
  )
}

export default Navigation
