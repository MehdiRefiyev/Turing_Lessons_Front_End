import React from 'react'
import styles from './NavigationBar.module.css'
import { NavLink } from 'react-router'

export default function NavigationBar() {
    return (
        <div className={styles.conatiner}>
            <ul>
                <li>
                    <NavLink to='./'>
                        ALL Musics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='./favorites'>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
