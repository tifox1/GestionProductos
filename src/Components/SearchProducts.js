import Box from '@mui/material/Box';
import NavBar from './Subcomponents/NavBar'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import InsetList from './Subcomponents/ListItems';
import { makeStyles } from '@mui/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white , 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  borderTop: '1px solid #C00',
  borderRight: "1px solid #C00",
  borderBottom: "1px solid #C00",
  borderLeft: "1px solid #C00"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '15ch',
    },
  },
}));

const useStyle = makeStyles({
  grid: {
    alignItems: 'center',

  }
})
export default function SearchProducts() {
  const [productos, setProductos] = React.useState([])
  const classes = useStyle()
  const handleChange = (event) =>{
    fetch('http://localhost:8000/api/product_list/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.value.toLowerCase(),
      })
    }).then(response => {
        if (response.ok){
            return response.json()
        } 
    }).then(data => {
        if (data) {
          console.log(data)
          setProductos(data)
        }
    })
    console.log(event.target.value)
}
  return (
      <> 
        <NavBar/>
        <Container fixed>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} sm={12}>
                <Box
                  component="form"
                  sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={handleChange}
                    />
                  </Search>
                </Box>
            </Grid> 
            <Grid item xs={12} sm={12}>
              {productos.length !==  0 ?
                <InsetList item={productos}/>
                :
                null
              }
            </Grid>
          </Grid>
        </Container>
      </>
  );
}