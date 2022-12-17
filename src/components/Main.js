import "../css/main.css"

function Main(props) {
    const {mode} = props
    return ( 
        <main className = {mode ? "dark" : ""}>
            <h2>Some Random Facts</h2>
            <p>
            <ul>
             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua. </li>
             <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
             <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
             <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
             <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
             </ul>
            </p>
        </main>
     );
}

export default Main;