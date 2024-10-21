import Image from "next/image";
import styles from "../styles/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className={styles.commonHeader}>共通ヘッダー</h2>
      <Image
        className={styles.dogImage}
        src="/dogs.jpg"
        height={144}
        width={144}
        alt="Dog Image"
      />
      {children}
    </>
  );
}
