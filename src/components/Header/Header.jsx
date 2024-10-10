import './Header.css'

const Header = ({title}) =>{

    return <div>
         <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
    </div>
}

export default Header