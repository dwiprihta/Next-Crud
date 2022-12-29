import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
//phallete
palette: {
   primary: {
      main: '#556cd6',
   },
   secondary: {
     main: '#19857b',
   },
   error: {
   main: red.A400,
   },
   white:{
    main:'#ffff'
   },
   softSuccess:{
    main:'#ffff'
   }
  },

});
export default theme;