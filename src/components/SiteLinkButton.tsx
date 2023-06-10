import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const SiteLinkButton = styled(ButtonBase)(() => ({
    width: '120px',
    height: '52px',
    background: '#81d7fc',
    border: '#81d7fc 2px solid',
    borderRadius: '7px',
    color: 'black',
    fontSize: '1.2rem',
    fontWeight: '500',
    transition: 'background 0.3s, color 0.3s',
    ":hover": {
        background: 'rgba(0, 0, 0, 0)',
        color: 'rgb(233, 233, 233)'
    }
}))

export default SiteLinkButton