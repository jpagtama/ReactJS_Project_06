import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import Card from './Card'
import BackDrop from './BackDrop'

const Modal = props => {
    const ModalAlert = () => {
        return (
            <React.Fragment>
                <Card className={styles.modal} >
                    {props.children}
                </Card>
                <BackDrop />
            </React.Fragment>
        )
    }

    return ReactDOM.createPortal(<ModalAlert />, document.getElementById("modal-root"))
}
export default Modal