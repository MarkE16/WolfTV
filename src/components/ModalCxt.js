import React, { useState, useMemo } from 'react'

export const ModalContext = React.createContext({})

function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const contextState = useMemo(() => ({
    modalOpen,
    setModalOpen
   }), [
    modalOpen,
    setModalOpen
  ])

  return (
    <ModalContext.Provider value={contextState}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider