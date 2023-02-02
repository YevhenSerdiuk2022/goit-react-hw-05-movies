import { Container} from "./App.styled";

import  AppBar  from "components/AppBar/AppBar";
import UserRoutes from "components/UserRoutes/UserRoutes";



export const App = () => {
  return (
    <Container>
     <AppBar/>
 
      <UserRoutes/>
    </Container>
  );
};
