import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/my-portfolio.module.css";

const MyPortfolio: NextPage = () => {
  return (
    <div className={styles.background}>
      <h1>Welcome to My Portfolio!</h1>
      <Link href="/" className={styles.link}>
        トップページへ戻る
      </Link>
    </div>
  );
};

export default MyPortfolio;
