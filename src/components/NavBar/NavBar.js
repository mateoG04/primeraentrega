import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {

    return (
        <nav>
            <h3>ZeroHero</h3>
            <div>
                <button>Comics</button>
                <button>Mangas</button>
                <button>Libros</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar