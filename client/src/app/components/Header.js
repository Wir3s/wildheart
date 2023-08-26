import Link from "next/link";

export default async function Header() {
  return (
    <header>
      <nav style={{
        display: 'flex',
        flexWrap: 'wrap',
        color: 'navy',
        backgroundColor: 'thistle',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        position: 'fixed',
        width: '100%',
        top: 0,
        border: '5px solid black',
        padding: '10px',
        fontSize: 'larger',
        zIndex: 10
      }}
      >
        <ul>
          <li style={{
            listStyle: 'none',
             display: 'inline-block',
             padding: '5px'
          }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{
            listStyle: 'none',
             display: 'inline-block',
             padding: '5px'
          }}>
            <Link href="services">Services</Link>
          </li>
          <li style={{
            listStyle: 'none',
             display: 'inline-block',
             padding: '5px'
          }}>
            <Link href="contact">Contact</Link>
          </li>
          <li style={{
            listStyle: 'none',
             display: 'inline-block',
             padding: '5px'
          }}>
            <Link href="about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
