import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import Card from '../Cards';

export default function Favorites() {
    const allMusic = useSelector((state) => state.music.allMusic);
    const favoriteMusic = useSelector((state) => state.music.favoriteMusic);

    const favoriteSongs = allMusic.filter((music) => favoriteMusic.includes(music.id));

    return (
        <div className={styles.container}>
            <ul>
                {favoriteSongs.map((music) => (
                    <Card
                        key={music.id}
                        id={music.id}
                        title={music.title}
                        artist={music.artist}
                        image={music.image}
                    />
                ))}
            </ul>
        </div>
    );
}
