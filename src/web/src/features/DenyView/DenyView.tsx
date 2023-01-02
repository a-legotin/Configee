import React from 'react';
import { useHistory } from 'react-router';
import { Box, Button, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// configs
import { PATH_NAME } from 'configs';

// actions
import { logout } from 'actions/auth.action';
import { useAppDispatch } from 'hooks/useDispatch';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontSize: 150,
    lineHeight: '150px',
    fontWeight: 700,
    color: '#252932',
    textShadow: 'rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;fontSize: 150',
  },
}));

function DenyView() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { t: translate } = useTranslation();

  const _handleLogout = () => {
    dispatch(logout());
    history.push(PATH_NAME.LOGIN);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'} color="textPrimary" className={classes.heading}>
          403
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Sorry, access denied. Please contact admin to verify and update your role.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button color="primary" variant="contained" onClick={_handleLogout}>
            {translate('LOGOUT')}
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default DenyView;
