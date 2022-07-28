import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./styles.scss";
import { useState } from "react";

export const SignIn = () => {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && user.displayName && (
          <img src={user.photoURL} alt={user.displayName} />
        )}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar a aplicação sem fazer
        cadastrado.
      </span>

      <button className="button" type="button" onClick={handleGoogleSignIn}>
        <GoogleLogo /> Entrar com Google
      </button>
    </div>
  );
};
