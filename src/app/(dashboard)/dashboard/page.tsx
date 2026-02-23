import authOptions from "@/helpers/authOptions";
import { getServerSession } from "next-auth";


const DashboardHomePage = async () => {


  const session = await getServerSession(authOptions);


  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-4xl  font-bold text-green-600">{session?.user?.name}</h1>
          <p>email: {session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
