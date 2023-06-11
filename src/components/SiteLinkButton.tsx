import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const SiteLinkButton = styled(ButtonBase)(() => ({
    width: '120px',
    height: '52px',
    border: '#81d7fc 2px solid',
    borderRadius: '7px',
    color: '#81d7fc',
    fontSize: '1.2rem',
    fontWeight: '500',
    transition: 'box-shadow 0.3s',
    ":hover": {
        "boxShadow": '0 0 7px 1px #81d7fc'
    }
}))

export default SiteLinkButton