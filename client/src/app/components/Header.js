import Link from "next/link";
import Grid from '@mui/material/Grid';

import { useRouter } from 'next/navigation'

const businessName = "Wild Heart Behaviour & Training";

export default async function Header() {
  return (
    <header>
      <nav
      >
        <Grid style={{
          display: 'flex',
          flexWrap: 'wrap',
          color: 'navy',
          backgroundColor: 'thistle',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'fixed',
          width: '100%',
          border: '5px solid black',
          padding: '10px 5px',
          fontSize: 'larger',
        }}>
          <Grid item xs={12}
            sx={{
              minWidth: "100%",
              justifyContent: 'center',
              display: {
                xs: "flex",
                md: "none"
              }
            }}>
            <h1 style={{
              maxWidth: "300px",
              textAlign: "center",
            }}>{businessName}</h1>
          </Grid>
          <Grid item xl={4}>
            <ul>
              <li style={{
                listStyle: 'none',
                display: 'inline-block',
                padding: '10px'
              }}>
                <Link href="/">Home</Link>
              </li>
              <li style={{
                listStyle: 'none',
                display: 'inline-block',
                padding: '10px'
              }}>
                <Link href="services">Services</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xl={4} sx={{
            display: {
              xs: "none",
              md: "flex"
            }
          }}>
            <h1 style={{
              maxWidth: "300px",
              textAlign: "center",
            }}>{businessName}</h1>
          </Grid>
          <Grid item xl={4}>
            <ul>
              <li style={{
                listStyle: 'none',
                display: 'inline-block',
                padding: '10px'
              }}>
                <Link href="contact">Contact</Link>
              </li>
              <li style={{
                listStyle: 'none',
                display: 'inline-block',
                padding: '10px'
              }}>
                <Link href="about">About Me</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
    </header >
  );
}
