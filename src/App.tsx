import Title from "./components/Title";
import Background from "./components/Background";
import CommandInterface from "./components/CommandInterface";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <Background />
        <div className="relative h-[80vh] bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:w-11/12 sm:rounded-lg sm:px-10 lg:w-1/2">
          <div className="mx-2">
            <Title />
            <CommandInterface />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
