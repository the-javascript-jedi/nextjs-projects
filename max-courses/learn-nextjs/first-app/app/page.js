import styles from "./page.module.css";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  console.log("home page running!!");
  return (
    <div>
      <main>
        <h1>Hello world</h1>
        <Header />
        <p>
          <Link href="/about">About Us</Link>
        </p>
      </main>
    </div>
  );
}
