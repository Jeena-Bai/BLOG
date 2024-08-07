import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'

const Navbar=() => {
  
  return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar color="secondary" position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Link to={'/blogs'}><Button style={{color:'white'}}>BLOGS</Button> </Link>
          <Link to={'/addblog'}> <Button style={{color:'white'}}>ADD BLOG</Button></Link>
          <Button style={{color:'white'}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar