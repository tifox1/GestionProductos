import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

export default function InsetList(props) {
  const navigate = useNavigate()

  const handleClick = (index) => {
    console.log(index)
    navigate('/consulta_productos/producto',{
      state: index
    })
  }
  return (
    <>
      {props.item.map((index) => {
        return(
          <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label="contacts"
          onClick={() => handleClick(index)}
          key={index.id}
          >
            <ListItem 
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardIosIcon/>
                </ListItemIcon>
                <ListItemText primary={index.name} />
              </ListItemButton>
            </ListItem>
          </List>
        )
      })
      }
    </>
  );
}