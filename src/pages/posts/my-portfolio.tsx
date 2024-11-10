import type { NextPage } from "next";
import Link from "next/link";
import useTheme from "../../hooks/useTheme";
import styles from "../../styles/my-portfolio.module.css";

const ProjectCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      GitHub リンク
    </a>
  </div>
);

const MyPortfolio: NextPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? styles.darkContainer : styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>My Portfolio</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? "ダークモード" : "ライトモード"}
        </button>
      </header>

      <p className={styles.description}>
        私のポートフォリオへようこそ！ここでは、私が開発したアプリケーションやプロジェクトをご紹介しています。
      </p>

      <div className={styles.cardContainer}>
        <ProjectCard
          title="Japanese Keyboard (Androidアプリ)"
          description="日本語のキーボードアプリ。Android向け。オフラインで動作し、シンプルなデザインで効率的なタイピングをサポートします。"
          link="https://github.com/KazumaProject/JapaneseKeyboard"
        />
        <ProjectCard
          title="MarkdownNote (Androidアプリ)"
          description="Markdownに対応したAndroidのノートアプリ。シンプルで使いやすく、マークダウン記法でメモを効率的に作成できます。"
          link="https://github.com/KazumaProject/MarkdownNote"
        />
        <ProjectCard
          title="Ironuki GUI (デスクトップアプリ)"
          description="画面上の色をリアルタイムで取得するGUIアプリ。UIデザインやカラーピッキングのサポートに最適です。"
          link="https://github.com/kazuma-naka/ironuki-gui"
        />
      </div>

      <Link href="/" className={styles.backLink}>
        トップページへ戻る
      </Link>
    </div>
  );
};

export default MyPortfolio;
