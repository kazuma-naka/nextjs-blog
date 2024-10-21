import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>共通ヘッダー</h2>
      <Image src="/dogs.jpg" height={144} width={144} alt="Dog Image"></Image>
      {children}
    </>
  );
}
