import { createGlobalStyle } from 'styled-components'

const Globalstyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Lato', sans-serif;
    
}
html{
    height: 100vh;
}
a{
    text-decoration: none;
}
`

export default Globalstyles
