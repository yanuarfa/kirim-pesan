import Header from "./Components/Header";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Logo from "./chat.svg";

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-zinc-800 text-slate-50 font-sans">
      {user ? (
        <div className="max-w-[728px] mx-auto bg-zinc-600 h-screen">
          <Header />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="Kirim pesan!" width={100} />
            <h1 className="text-2xl font-semibold mb-3">Masuk</h1>
            <div>
              <button
                onClick={signIn}
                className="bg-white py-4 px-8 text-slate-700 font-bold rounded-md hover:bg-red-300 hover:-translate-y-1 transition duration-300 delay-150 ease-in-out active:bg-red-300 active:-translate-y-1"
              >
                Masuk dengan Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
