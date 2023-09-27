import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "./_app";
import { useRouter } from "next/router";
function Dashboard() {

  return (
    <div id="dashboardPage">
      <h1> Welcome to Dashboard name</h1>
      <button >
        Log Out
      </button>
    </div>
  );
}
export default Dashboard;
