import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()
  const [levels, setLevels] = useState(0)
  const [online, setOnline] = useState()
  const [bans, setBans] = useState(0)
  const [roms, setRoms] = useState()
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