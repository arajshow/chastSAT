import SideBar from "@/Components/SideBar";
import HomeBar from "@/Components/HomeBar";


export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-LcornerColor via-midColor via-35% to-RcornerColor flex w-screen min-h-screen">
      <div className="w-[30%] md:block hidden box-with-shadows h-[calc(100vh -3.5rem)]" >
          <SideBar />
      </div>

      <div className="md:w-[70%] w-full mx-auto ">
        <HomeBar  />
      </div>
      
      
    </div>
  );
}


