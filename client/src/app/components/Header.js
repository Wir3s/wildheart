import Link from "next/link";

export default async function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
