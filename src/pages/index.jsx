import LayoutMain from 'layouts/layouts/layout-main';
import * as React from 'react';


const Home = () => {
  let flashcardSpotlightStyleQuestion = {
    content: "url('/cards/Group26-question.png')", 
    width: "300px",
    appearance: "none",
    display: "block"
  }

  let flashcardSpotlightStyleAnswer = {
    content: "url('/cards/Group26-answer.png')", 
    width: "300px",
    appearance: "none",
    display: "block"
  }

  
  const [checked, setCheck] = React.useState(false);
  const handleChange = () => {
    setCheck(!checked);
  };
  
  return (
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
          onChange={handleChange} 
          style={checked ? flashcardSpotlightStyleQuestion : flashcardSpotlightStyleAnswer} />

         {/*  <img className='w-full' src="/cards/Group26-question.png" alt="spotlight-card-img" style={{width: "300px"}} />
          <img className='w-full' src="/cards/Group26-answer.png" alt="spotlight-card-img" style={{width: "300px"}} /> */}
        </div>
      </div>
    </div>
    {/* Spotling end */}
    <div className="mx-auto my-10 max-w-5xl text-center">So it begins</div>
    
  </LayoutMain>
 )
};

export default Home;
