import { useRouter } from 'next/router';
import record from '/data/bestArtists_RS.json';
import styles from '@/styles/Home.module.css'
import { useState } from 'react';

export default function Artist() {
  const router = useRouter();
  const artistName = router.query.artist;
  //const artistData = record.find(rec => rec.Artist === artistName);

  const [artistData, setArtistData] = useState(record[0]); // initialize to first object in dataset
  

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * record.length);
    setArtistData(record[randomIndex]); // update state variable with random object
  };
  
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{artistData.Artist}</h1>
      <img src={artistData.ImageUrl} alt={artistData.Artist} className={styles.bandpic}/>

      <button onClick={handleRandomClick}>generate a new artist</button>

      <p className={styles.scores1}> Rolling Stones Rank</p>
      <p className={styles.scores}> {artistData.RollingStoneMagazineRank}</p>

      <p className={styles.scores1}> Grammy Awards</p>
      <p className={styles.scores}>{artistData.MainGrammyawards}</p>

      <p className={styles.scores1}> Grammy Nominations</p>
      <p className={styles.scores}> {artistData.MainGrammyNominations}</p>

      <p className={styles.scores1}> Total Awards</p>
      <p className={styles.scores}> {artistData.TotalAwards}</p>

      <p className={styles.scores1}> Total Nominations</p>
      <p className={styles.scores}> {artistData.TotalNominations}</p>
     
    
    </div>
  );
}
