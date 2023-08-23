import Link from "next/link";

//Icons not working yet
//import InstagramIcon from '@mui/icons-material/Instagram';

export default async function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                color: 'navy',
                backgroundColor: 'thistle',
                position: "static",
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                borderTop: '5px solid black',
                padding: '10px',
                fontSize: 'larger',
            }}>
            <p style={{
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
            }}>
                <Link href="https://www.instagram.com/wild.heart.training/" target="_blank"
                    style={{
                        margin: '1vh',
                    }}> Instagram Icon
                    {/* <InstagramIcon /> */}
                </Link>
                <span style={{
                    margin: '1vh',
                }}>
                    © Wild Heart Training 2023
                </span>
            </p>
        </footer>
    )
}
