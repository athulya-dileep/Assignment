import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5'>DashCart</Typography> &nbsp; &nbsp; &nbsp;  
                <Link to='/dash'> 
                <Button variant='contained'>Home</Button>
                </Link> &nbsp; &nbsp; &nbsp;
                <Link to='/add'>
                <Button variant='contained'>Add Product</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar