import ChatBox from "./components/ChatBox"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div className="bg-slate-950 w-full h-screen text-white flex justify-center">
      <HeroSection />
      <ChatBox />
    </div>
  )
}

export default App
