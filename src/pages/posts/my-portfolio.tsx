import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/my-portfolio.module.css";

const MyPortfolio: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>私のポートフォリオ</h1>
      <p className={styles.description}>Welcome to My Portfolio!!</p>
      <p className={styles.description}>
        ここでは、私が開発したアプリケーションやプロジェクトをご紹介しています。
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Japanese Keyboard (Androidアプリ)</h2>
          <p>
            日本語入力に特化したAndroidキーボードアプリです。オフラインで完全に動作し、シンプルかつ直感的なデザインで、効率的なタイピング体験を提供します。
          </p>
          <a
            href="https://github.com/KazumaProject/JapaneseKeyboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub リンク
          </a>
        </div>

        <div className={styles.card}>
          <h2>MarkdownNote (Androidアプリ)</h2>
          <p>
            Markdown形式に対応したAndroidノートアプリです。ユーザーがマークダウン記法を活用して効率的にメモを取ることができ、シンプルで使いやすいインターフェースを備えています。
          </p>
          <a
            href="https://github.com/KazumaProject/MarkdownNote"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub リンク
          </a>
        </div>

        <div className={styles.card}>
          <h2>Ironuki GUI (デスクトップアプリ)</h2>
          <p>
            画面上の任意の位置から色をリアルタイムで取得できるデスクトップGUIアプリです。UIデザインやカラーピッキングのサポートに最適です。
          </p>
          <a
            href="https://github.com/kazuma-naka/ironuki-gui"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub リンク
          </a>
        </div>
      </div>

      <Link href="/" className={styles.backLink}>
        トップページへ戻る
      </Link>
    </div>
  );
};

export default MyPortfolio;
