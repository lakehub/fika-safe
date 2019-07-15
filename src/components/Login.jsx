import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
  
        return (
            <div>
        
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <img src= "/Users/pato/Downloads"/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
              </Typography>
                    <form className="form"  noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{backgroundColor: '#009688'}}
                            className="submit"

                        >
                            Login
                </Button>

                    </form>
                </div>

            </Container>
        
            </div>
        )
    }
}


