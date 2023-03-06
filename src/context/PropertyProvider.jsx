import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { doc, setDoc, collection, getDocs } from "firebase/firestore/lite";
import { DB } from "../firebase/config";
import { defaultProperty } from "../components/post-property";
import { sortArray, toggleItems } from "../utils/array";

export const PropertyContext = createContext();

const AuthProperty = ({ children }) => {
  const [allProperties, setAllProperties] = useState([]);
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(defaultProperty);
  const [types, setTypes] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => filterByType(), [types]);

  useEffect(() => filterByLocation(), [location]);

  const toggleTypes = (type) => setTypes(toggleItems(types, type));

  const filterByLocation = () => {
    setProperties(
      location
        ? allProperties.filter((item) =>
            item.location.name.toLowerCase().includes(location.toLowerCase())
          )
        : allProperties
    );
  };

  const filterByType = () => {
    setProperties(
      types.length
        ? allProperties.filter(({ type }) => types.includes(type))
        : allProperties
    );
  };

  const getProperties = async () => {
    const ref = collection(DB, "sprint/properties/list");
    const docs = await getDocs(ref);
    const data = [];
    docs.forEach((doc) =>
      data.push({
        ...doc.data(),
        id: doc.id,
        location: JSON.parse(doc.data().location),
      })
    );
    const properties = sortArray(data, "date");
    setProperties(properties);
    setAllProperties(properties);
  };

  const postProperty = async () => {
    const newDoc = doc(collection(DB, "sprint/properties/list"));
    try {
      await setDoc(newDoc, {
        ...property,
        location: JSON.stringify(property.location),
        date: new Date().getTime() / 1000,
      });
      toast.success("Propiedad publicada correctamente!!");
      setProperty(defaultProperty);
      getProperties();
    } catch (error) {
      toast.error("Hubo un error!!");
    }
  };

  return (
    <PropertyContext.Provider
      value={{
        types,
        properties,
        setProperties,
        postProperty,
        property,
        setProperty,
        toggleTypes,
        setLocation,
        location,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default AuthProperty;
