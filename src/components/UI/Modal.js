import React from 'react'
import styles from './Modal.module.css'
import Card from './Card'
import BackDrop from './BackDrop'

const Modal = props => {
    return (
        <React.Fragment>
            <Card className={styles.modal} >
                {props.children}
            </Card>
            <BackDrop />
        </React.Fragment>
    )
}
export default Modal