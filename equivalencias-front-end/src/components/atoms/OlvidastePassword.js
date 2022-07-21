import { Grid, Link } from '@mui/material';
import styled from 'styled-components';

const OlvidastePassword = styled(Grid)`
    margin-top: 16px;
    border-radius: 20px;
    background: #fff;
    text-align: center;
`;

const OlvidastePasswordLink = styled(Link)`
    color: #009673;
    font-weight: light;
    font-size: 0.875em;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export { OlvidastePassword, OlvidastePasswordLink };
