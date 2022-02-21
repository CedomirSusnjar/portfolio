import i18next from "i18next";
import React, { useState } from "react";
import { personalData, servicesData } from "./data";

const defaultState = {
    personAbout: null
  };
  
  const defaultActions = {
    setPersonAbout: () => {}
  };

  export const ApplicationContext = React.createContext({
    ...defaultState,
    ...defaultActions,
  });

  export const ApplicationConsumer = ApplicationContext.Consumer;

  const ApplicationProvider = (props) => {

    const [personAbout, setPersonAbout] = useState(personalData);
    const [services, setServices] = useState(servicesData);
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        i18next.changeLanguage(language === 'en' ? 'sr' : 'en');
        localStorage.setItem('language', language === 'en' ? 'sr' : 'en');
        setLanguage(language === 'en' ? 'sr' : 'en');
    };
  
    const state = {
      personAbout,
      services,
      language,
      setServices,
      setPersonAbout,
      changeLanguage
    };
  
    return (
      <ApplicationContext.Provider value={state}>
        {props.children}
      </ApplicationContext.Provider>
    );
  };

  export const useApplicationStateValue = () => React.useContext(ApplicationContext);

export default ApplicationProvider;