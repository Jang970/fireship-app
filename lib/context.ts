import { createContext } from "react";

interface ContextProps {
  user: any;
  username: any;
}

const defaultValues: ContextProps = { user: null, username: null };

export const UserContext = createContext(defaultValues);
