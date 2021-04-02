import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const AppContext = createContext();

export function AppProvider({ children }) {
  const userInitialData = {
    email: 'fulano@gmail.com',
    name: 'Fulano de Souza',
    id: -1,
    experience: 0,
    maxExperience: 1,
    matches: [
      { victory: 0, defeat: 0, button: { icon: "", title: "", link: "" } },
      { victory: 0, defeat: 0, button: { icon: "", title: "", link: "" } },
    ]
  }
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(userInitialData)
  const [levels, setLevels] = useState(0)
  const [online, setOnline] = useState(0)
  const [bans, setBans] = useState(0)
  const [roms, setRoms] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://chat-cadmus.herokuapp.com/teste/gamers');
        console.log(response.data);
        setUser(response.data.user);
        setLevels(response.data.levels);
        setOnline(response.data.online);
        setBans(response.data.bans);
        setRoms(response.data.roms);
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [])
  return (
    <AppContext.Provider value={{
      loading,
      user,
      levels,
      online,
      bans,
      roms
    }}>
      {children}
    </AppContext.Provider>
  )
}