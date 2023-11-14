export default function Footer() {
    const present = new Date();
    const year = present.getFullYear();

    return (
        <footer>
            <p>Copyright @ {year}</p>
        </footer>
    );
}