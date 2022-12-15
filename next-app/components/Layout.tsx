import Header from "./Header"

export default function Layout({children}:{children:any}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>&copy; 2022 - ZeroDot618's portfolio</footer>
        </>
    );
}