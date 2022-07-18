import * as React from "react";
import Grid from "@mui/material/Grid";
import ItemCard from "../ItemCard/ItemCard";
import Fade from '@mui/material/Fade';

const ItemList: React.FC<any> = ({dataJson}) => {
  const [spacing] = React.useState(2);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing} >
          {dataJson.map((value: { id: React.Key | null | undefined; },index: number) => (
            <Fade in timeout={1000}  key={value.id}>
              <Grid key={value.id} item>
                  <ItemCard  key={value.id} dataJson={dataJson[index]}/>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ItemList;