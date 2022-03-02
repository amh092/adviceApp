// the plan is to create react app for the advice 
// why is not read 
//logic is to create 
import React from 'react'
import styles from './Advice.module.css'
import Dice from './../svgs/Dice'
import Pattern from '../svgs/Pattern'
const Advice = (props) => {
    
    return (
        <div>
        <div className={styles['advice-box']}>
            <h1>Advice # {props.id}</h1>
           <p>{`" ${props.advice} "`}</p>

            <figure className={styles['pattern-box']}>
                <hr/>
                <Pattern/>
                <hr/>
            </figure>
       
            <figure className={styles['dice-box']}>
                <Dice action={props.action}/>
            </figure>
         </div>
        </div>
    )
}

export default Advice
