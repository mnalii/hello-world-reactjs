// The button component here using css module, so all styling class in css module below will only scope to this specific component
// and will not accidentally affect other parts of the application
// You can also use another library like styled-components to make you styling modular and maintainable -> https://styled-components.com/
import styles from "./ButtonAlert.module.css";

function ButtonAlert() {
  function handleClick() {
    alert("I have been clicked");
  }
  return (
    <button className={styles.button} onClick={handleClick}>
      Click Me
    </button>
  );
}

export default ButtonAlert;
