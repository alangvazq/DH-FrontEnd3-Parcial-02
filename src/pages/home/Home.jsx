import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src="https://cdn11.bigcommerce.com/s-kzjsut/product_images/uploaded_images/amiibobanner.jpg" alt="Amiibo Banner" />
    </div>
  );
}

export default Home;