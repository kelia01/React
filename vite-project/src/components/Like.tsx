import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props{
    onClick: () => void
}

const Like = ({onClick}: Props) => {
    const Toggle = () => {
        setStatus(!status);
        onClick()
    }

    const [status, setStatus] = useState(false);
      if (status) return <AiFillHeart size={20} onClick={Toggle}/>
   return <AiOutlineHeart  size={20} onClick={Toggle}/>
}

export default Like