import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* h6 */}
      <Typography variant="subtitle1">sub Title 1</Typography>
      <Typography variant="subtitle2">sub Title 2</Typography>

      {/* body1 is default */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a
        recusandae mollitia ex. Iusto quia quod at ipsam, tempora dolorum
        facilis. Possimus quisquam sit, nemo placeat explicabo repudiandae
        officiis incidunt.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil animi
        voluptatum, repellendus consequuntur perspiciatis suscipit quia
        dignissimos eius itaque quaerat beatae temporibus non officiis corrupti
        aspernatur ipsa vero impedit saepe?
      </Typography>

      {/* 
        props component: style h4, element h1
        props gutterBottom: add margin bottom
    */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
    </div>
  );
};
