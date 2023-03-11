import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Auth } from "./components/auth";
import { Map } from "./components/map";
import { PostProperty } from "./components/post-property";
import { PropertyContext } from "./context/PropertyProvider";
import { AuthContext } from "./context/AuthProvider";
import { InstructionModal } from "./components/instruction-modal";
import { getInstructions, MODALS, setInstructions } from "./utils/modal";
import { getUser } from "./utils/auth";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

function App() {
  const [modal, setModal] = useState(MODALS);
  const [authModal, setAuthModal] = useState("login");
  const [currentInstruction, setCurrentInstruction] = useState("register");

  const { properties } = useContext(PropertyContext);
  const { session } = useContext(AuthContext);

  const [instructions, user] = [getInstructions(), getUser()];

  const isNewUser = () => {
    return !instructions || (!instructions.register && !user.id);
  };

  const toggleModal = (name) => {
    setModal({ auth: false, postProperty: false, [name]: !modal[name] });
  };

  useEffect(() => {
    if (!instructions) {
      setInstructions({
        register: false,
        post: false,
        types: false,
        search: false,
      });
    }
    if (isNewUser()) setModal({ ...modal, instructions: true });
  }, []);

  useEffect(() => {
    if (session && !instructions?.post) {
      toggleModal("instructions");
      setCurrentInstruction("post");
    }
  }, [session]);

  return (
    <div className="h-screen flex flex-col">
      <Header
        toggleModal={toggleModal}
        setAuthModal={setAuthModal}
        setModal={setModal}
        setCurrentInstruction={setCurrentInstruction}
      />
      <main className="flex flex-1 main flex-col md:flex-row">
        <div className="properties__container">
          <div className="mb-4">
            <p className="text-gray-600 font-semibold">
              {properties.length} resultado{properties.length > 1 ? "s" : ""}
            </p>
          </div>
          <section className="properties">
            {properties.map((property, index) => (
              <Card key={property.id} item={property} index={index} />
            ))}
          </section>
        </div>
        <section className="flex-1">{!modal?.postProperty && <Map />}</section>
      </main>
      <Footer />
      <Auth
        showModal={modal.auth}
        toggleModal={toggleModal}
        isLogin={authModal === "login"}
      />
      {modal.postProperty && (
        <PostProperty
          showModal={modal.postProperty}
          toggleModal={toggleModal}
        />
      )}
      <InstructionModal
        showModal={modal.instructions}
        toggleModal={toggleModal}
        setAuthModal={setAuthModal}
        currentInstruction={currentInstruction}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
