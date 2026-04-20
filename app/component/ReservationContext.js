"use client";
import { createContext, useCallback, useContext, useState } from "react";

const ReservationContext = createContext();

const initalState = { from: undefined, to: undefined };
export function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);

  const resetRange = useCallback(() => {
    setRange(initalState);
  }, []);
  const value = { range, setRange ,resetRange};
  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
}


export function useReservation(){
    const ctx = useContext(ReservationContext)
    if(!ctx)  throw new Error("Context was used outside provide");
    
    return ctx
}
