import React from 'react'
import { useSelector } from 'react-redux';
import styles from './AllMusics.module.css'
import Card from '../Cards'

export default function AllMusics() {

    const allMusic = useSelector((state) => state.music.allMusic);


    return (
        <div className={styles.container}>

            <ul>
                {allMusic.map((music) => (
                    <Card
                        key={music.id}
                        id={music.id}
                        artist={music.artist}
                        image={music.image}
                    />
                ))}
            </ul>

        </div>
    )
}
