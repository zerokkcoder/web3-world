export default function Layout({children}:{children:any}) {
    return (
        <>
            <header>Header</header>
            <main>{children}</main>
            <footer>&copy; 2022 - ZeroDot618's portfolio</footer>
        </>
    );
}