import Link from "next/link";

export default async function ContentArea1() {
    return (
        <div
            style={{
                width: '70%',
                backgroundColor: "transparent",
                display: 'flex',
                justifyContent: 'center',
                border: '5px solid Black'
            }}>
            <p
            style={{
                padding: '5px'
            }}>
                Text Blurb
            </p>
            <p
            style={{
                padding: '25px'
            }}>Image</p>
        </div>
    )
}