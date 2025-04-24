export default function LoginForm({ isLoggedIn, setIsLoggedIn }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoggedIn(!isLoggedIn);
    };
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <button type="submit">
          {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
      </form>
    );
  }