import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';
import React,{useState} from 'react';

const ProfileSelector = () => (
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src="https://www.profilebakery.com/wp-content/uploads/2023/11/Tinder-AI-photos-women-400x267.jpeg" />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
        <h2 className="text-3xl font-bold"> Foo bar, 30</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-grey-600 mb-">I am a software Enginner with 10 years of exp.</p>
    </div>
    <div className="p-4 flex justify-center space-x-4">
      <button className="bg-red-500 rounded-full p-4 text-white hover:bg-red-700"
        onClick={() => console.log("left")}>
        <X size={24} />
      </button>
      <button className="bg-green-500 rounded-full p-4 text-white hover:bg-green-700"
        onClick={() => console.log("right")}>
        <Heart size={24} />
      </button>
    </div>
  </div>
);

const MatchesList = () => (
  <div className="rounded-lg shadow-lg p-4">
    <h2 className="text-2xl font-bold mb-4">Matches</h2>
    <ul>
      {[
        { id: 1, firstName: 'Foo', imageUrl: 'https://www.profilebakery.com/wp-content/uploads/2023/11/Tinder-AI-photos-women-400x267.jpeg' },
        { id: 2, firstName: 'Faa', imageUrl: 'https://www.profilebakery.com/wp-content/uploads/2023/11/Tinder-AI-photos-women-400x267.jpeg' }
      ].map(match => (
        <li key={match.id} className='mb-2'>
          <button className="w-full hover:bg-gray-100 rounded flex item-center">
          <img src={match.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover" />
          <span>
            <h3 className='font-bold'>{match.firstName}</h3>
            </span>
            </button>
        </li>
      ))}
    </ul>
  </div>
);


function App() {

  const [currentScreen, setCurrentScreen] = useState('profile');

  const renderScreen = () => {
    switch (currentScreen) {
        case 'profile':
          return <ProfileSelector />;
        case 'matches':
          return <MatchesList />;
      }
  }

  return(<>
  <div className="max-w-md mx-auto p-4">
      <nav className="flex justify-between">
        <User  onClick={() => setCurrentScreen("profile")}/>
        <MessageCircle  onClick={() => setCurrentScreen("matches")}/>
      </nav>
      {renderScreen()}
  </div>
  </>)
}

export default App

