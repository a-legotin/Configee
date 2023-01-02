import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// material core
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// configs
import { USER_ROLE } from 'configs';

// actions
import { login } from 'actions/auth.action';
import { useAppDispatch } from 'hooks/useDispatch';
import { ConfigeeIcon } from '../../components/atoms/icons/ConfigeeIcon';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [name, setName] = useState('alex@ezlab.ru');
  const [role, setRole] = useState('ADMIN');

  const _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(name, role, history));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ConfigeeIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={_onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <br />
          <br />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="select-outlined-label">Role</InputLabel>
            <Select fullWidth value={role} onChange={handleSelectChange} label="Role">
              <MenuItem value={USER_ROLE.ADMIN}>Admin</MenuItem>
              <MenuItem value={USER_ROLE.LEAD}>Lead</MenuItem>
              <MenuItem value={USER_ROLE.GUEST}>Guest</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" sx={{ mt: 3, mb: 2 }} fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
