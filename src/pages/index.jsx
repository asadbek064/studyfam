import * as React from 'react';
import LayoutMain from 'layouts/layouts/layout-main';


const Home = () => {
  const flashcardSpotlightStyleQuestion = {
    content: "url('/cards/Group26-question.png')", 
    width: "300px",
    appearance: "none",
    display: "block"
  }

  const flashcardSpotlightStyleAnswer = {
    content: "url('/cards/Group26-answer.png')", 
    width: "300px",
    appearance: "none",
    display: "block"
  }

  
  const [checked, setCheck] = React.useState(false);
  const handleChange = () => {
    setCheck(!checked);
  };

  return(
 <LayoutMain>
    {/* Spotlight */}
    <div className="flex justify-center">
      <div className="max-w-3xl rounded overflow-hidden shadow-md mt-10">
        <div className='m-2 px-20 py-10'>
          <div className='font-bold text-4xl mb-2 text-[#586380] flex justify-start '>
            <div className='text-[#5A80FE]'>Studyfam&nbsp;</div>flashcards done right!
          </div>
        </div>
        <div className='flex justify-center mb-8 '>
          <input 
          type="checkbox"
          className='cursor-pointer'
          checked={checked} 
          onChange={() => handleChange} 
          style={checked ? flashcardSpotlightStyleQuestion : flashcardSpotlightStyleAnswer} />

        </div>
      </div>
    </div>
    {/* Spotling end */}
    
  </LayoutMain>
  )
};

export default Home;
