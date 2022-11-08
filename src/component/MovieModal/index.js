import React, { useRef }  from 'react'
import useOnclickOutside from '../../hooks/useOnclickOutside';
import "./MovieModal.css"

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  tagline,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen}
  ) {

    const ref = useRef();
    useOnclickOutside(ref,()=>{setModalOpen(false)})
    
  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper_modal'>
        <div className='modal' ref={ref}>
          <span onClick={()=>setModalOpen(false)} className='modal_close'><i className='xi-close'></i></span>
          <img className='modal_poster_img' 
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt='modal_poster' />
          <div className='modal_content'>
            <p className='modal_date'>
              {" "}
                {release_date ? release_date :first_air_date}
            </p>
            <p className='modal_user_perc'>
            {tagline}
            </p>
            
          
           <h2 className='modal_title'>{title ? title :name}</h2>
           < p className='modal_overview'>평점: {vote_average}
           </p>
           <p className='modal_overview'>{overview}</p>
         
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default MovieModal;