import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchProducts from "./Components/SearchProducts"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProductDetails from "./Components/ProductDetail";

const theme = createTheme({
  palette: {
    primary:{
      main: '#000000'
    },
    secondary:{
      main: '#ffffff'
    },
    tertiary:{
      main: '#9b9b9b'
    },
    quaternary:{
      main: '#727272'
    },
    fifth:{
      main: '#9b9b9b'
    },

  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/consulta_productos/" element={<SearchProducts/>} />
            <Route path="/consulta_productos/producto" element={<ProductDetails/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
