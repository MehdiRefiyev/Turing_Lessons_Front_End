import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cards.module.css';
import liked from '../../assets/images/png/heart-18.png';
import notliked from '../../assets/images/png/heart-50.png';
import { toggleFavorite } from '../../redux/slices/musicSlice';

export default function Card({ id, title, artist, image }) {
    const dispatch = useDispatch();

    const isFavorite = useSelector((state) => state.music.favoriteMusic.includes(id));

    const clickHandler = () => {
        dispatch(toggleFavorite(id));
    };

    return (
        <li className={styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{artist}</p>
            <div className={styles.like} onClick={clickHandler}>
                <img src={isFavorite ? liked : notliked} alt="like" />
            </div>
        </li>
    );
}
