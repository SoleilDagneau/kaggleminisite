import { useRouter } from 'next/router';
import record from '/data/bestArtists_RS.json';
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    <>
    <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <main className={styles.main}>
    <Image className={styles.logo} src='/logo.png' width='100' height='100'/>
      <h1 className={styles.title}>{artistData.Artist}</h1>
      <img src={artistData.ImageUrl} alt={artistData.Artist} className={styles.bandpic}/>

      <button className={styles.button} onClick={handleRandomClick}>Next Artist</button>

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
     
    
    </main>
    </>
  );

}
