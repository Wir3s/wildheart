import Link from "next/link";

//Icons not working yet
//import InstagramIcon from '@mui/icons-material/Instagram';

export default async function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                backgroundColor: "transparent",
                position: "static",
                bottom: 0,
                display: 'flex',
                justifyContent: 'center'
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
