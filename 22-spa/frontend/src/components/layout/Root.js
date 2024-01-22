import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../MainNavigation";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main className="content">
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      </main>
    </>
  );
}
