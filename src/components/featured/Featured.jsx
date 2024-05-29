import React from 'react'
import "./Featured.css"
import {InfoOutlined, PlayArrow} from "@material-ui/icons"

 function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "movie" ? "Movies" : "Tv Shows"}
          </span>
          <select nmae = "genre" id="genre"> 
          <option >Genre</option>
          <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
         
        </div>
      )}
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
        <div className='info'>
          <img src="" alt=''/>
          <span className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nemo reiciendis, repellendus adipisci quam, quasi eum aperiam veniam voluptas tenetur aspernatur perspiciatis nostrum ex tempore vitae inventore ad nulla. Eius!

          </span>
          <div className='buttons'>
            <button className='play'>
                 <PlayArrow/>
                 <span>
                  Play
                 </span>
            </button>
            <button className='more'>
              <InfoOutlined/>
              <span>
                More Info
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Featured