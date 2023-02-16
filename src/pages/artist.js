import { useRouter } from 'next/router';
import record from '/data/bestArtists_RS.json';
import styles from '@/styles/Home.module.css'

export default function Artist() {
  const router = useRouter();
  const artistName = router.query.artist;
  const artistData = record.find(rec => rec.Artist === artistName);

  return (
    <div>
      <h1 className={styles.title}>{artistData.Artist}</h1>
      <p className={styles.scores}> Rolling Stones Rank: {artistData.RollingStoneMagazineRank}</p>
      <p className={styles.scores}>Grammy Awards: {artistData.MainGrammyawards}</p>
      <p className={styles.scores}>Grammy Nominations: {artistData.MainGrammyNominations}</p>
      <p className={styles.scores}>Total Awards: {artistData.TotalAwards}</p>
      <p className={styles.scores}>Total Nominations: {artistData.TotalNominations}</p>
     
      <img src={artistData.ImageUrl} alt={artistData.Artist} className={styles.bandpic}/>
    </div>
  );
}
