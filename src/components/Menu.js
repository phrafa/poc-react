import { StylesMenu } from './Menu/Styles'

const Menu = ({times}) => {

    const handleClick = (mundial) => {
        alert(`Esse time tem ${mundial} mundial.`)
    }

    return (
        <StylesMenu>
        <div className="submenu">
            <a href="#">Menu
            <ul>
                {times.map( ({name, mundial}) => 
                    <li onClick={() => handleClick(mundial)}>{name}</li>
                )}
            </ul>
            </a>
        </div>
        <p>trejtjerlkjtlkerjkl</p>
        </StylesMenu>
    );
}

export default Menu;