import { useContext, useState } from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Auth } from "./components/auth";
import { Map } from "./components/map";
import { PostProperty } from "./components/post-property";
import { PropertyContext } from "./context/PropertyProvider";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");
function App() {
  const [modal, setModal] = useState({ auth: false, postProperty: false });
  const [authModal, setAuthModal] = useState("login");

  const { properties } = useContext(PropertyContext);

  const toggleModal = (name) => {
    setModal({ auth: false, postProperty: false, [name]: !modal[name] });
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleModal={toggleModal} setAuthModal={setAuthModal} />
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
        <section className="flex-1">{!modal.postProperty && <Map />}</section>
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
      <ToastContainer />
    </div>
  );
}

export default App;
