import i18next from "i18next";
import React, { useState } from "react";
import { personalData, servicesData } from "./data";

const lang = localStorage.getItem('language');
const defaultLanguage = 'en';

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
    const [language, setLanguage] = useState(lang ? lang : defaultLanguage);

    const chooseLanguage = () => {
      return language === 'en' ? 'sr' : 'en';
    };

    const changeLanguage = () => {
      const newLanguage = chooseLanguage();
        i18next.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage);
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