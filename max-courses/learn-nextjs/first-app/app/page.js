import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("home page running!!");
  return (
    <div>
      <main>
        <h1>Hello world</h1>
        <p>
          <Link href="/about">About Us</Link>
        </p>
      </main>
    </div>
  );
}
