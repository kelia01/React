import React from "react";

const UseFlex = () => {
  const Json = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className='flex justify-center items-center '>
<div className='bg-green-200 px-3 py-3 flex justify-center items-center space-x-3 '>


            {Json.map((url)=>
            <div className='bg-white w-auto h-auto rounded-lg p-4'>
            <h1 className='text-lg'>{url.setup}</h1>
            <p className='text-lg'>{url.punchline}</p>
            </div>
            )}
            </div>






        </div>

  );
};

export default UseFlex;
