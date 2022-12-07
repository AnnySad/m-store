import React, {createContext, useState} from 'react';

interface IModalContext {
    modal: boolean
    open: ()=> void
    close: ()=>void
}

export const ModalContext= createContext<IModalContext>({
    open(): void {},
    close(): void {},
    modal: false
})

export  const ModalState = ({children}: {children: React.ReactNode})=>{
    const [modal, setModal]=useState(false)
    const open = () => {
      setModal(true)
    }
    const close = () => {
      setModal(false)
    }

    return(
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
)
}