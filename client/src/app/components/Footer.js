import Link from "next/link";

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
                <Link href="https://github.com/Wir3s/wildheart/tree/main" target="_blank"
                    style={{
                        margin: '1vh',
                    }}>
                    <span style={{
                        margin: '1vh',
                    }}>
                        © Wild Heart Training 2023
                    </span>
                </Link>
            </p>
        </footer>
    )
}
