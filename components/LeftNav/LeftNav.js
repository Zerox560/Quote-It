import NavLink from "./NavLink";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudUploadRounded from "@material-ui/icons/CloudUploadRounded";

import { NavContainer, Brand } from "./LeftNavStyles";

function LeftNav() {
    return (
        <NavContainer>
            <Brand>Quote it!</Brand>
            <NavLink Icon={HomeIcon} text="Inicio" active href={"/newQuote"} />
            <NavLink Icon={AccountCircleIcon} text="Perfil" href={"/newQuote"} />
            <NavLink Icon={CloudUploadRounded} text="Subir Frase" href={"/newQuote"} />
        </NavContainer>
    )
}

export default LeftNav;
