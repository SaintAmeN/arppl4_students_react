import classes from './App.module.css';
import NavigationHeader from "./components/NavigationHeader";
import AppBody from "./components/AppBody";

function App() {
    return (
        <div className={classes.App}>
            <NavigationHeader/>
            <AppBody/>
        </div>
    );
}

export default App;

// Adres serwera aplikacji:
// http://localhost:3000/

// Adres komponentu dziennik elektroniczny:
// http://localhost:3000/dziennikElektroniczny/

// Panel studentów (z perspektywy nauczyciela) elektroniczny:
// http://localhost:3000/dziennikElektroniczny/teacher/students/

// Panel ocen (z perspektywy nauczyciela) elektroniczny:
// http://localhost:3000/dziennikElektroniczny/teacher/grades/

// Panel dzieci (z perspektywy rodzica) elektroniczny:
// http://localhost:3000/dziennikElektroniczny/parent/students/

// Panel ocen (z perspektywy rodzica) elektroniczny:
// http://localhost:3000/dziennikElektroniczny/parent/grades/

