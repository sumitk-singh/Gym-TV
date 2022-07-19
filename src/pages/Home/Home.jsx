
import './Home.css';
import VideoCategoryCard from '../../components/Card/VideoCategoryCard/VideoCategoryCard.jsx';
import homePageVideoCategoryItems from '../../db/homePageVideoCategoryDB';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* main container */}
      <div className='main-container-home-page'>

        <section className='section-a'>
          <Sidebar />
        </section>

        <section className='section-b'>
          {/* section-1 */}
          <section className="section-1">
            <div>
              <h2 className='txt-big'>Fitness start here</h2>
             
              <q>
              If you want something you’ve never had, you must be willing to do something you’ve never done.
              </q>
              <p>Let's start today</p>
              <Link to='/explore'> <button className="btn-section-1" >Explore</button></Link>
            </div>
            <div>
              <img className="home-page-img" src="/assets/home-page-image.png" alt="" />
            </div>
          </section>
          {/* end of section-1 */}


          <h3>Video Categories:</h3>
          {/* section 2 */}
          <section className="section-2">

            <Link to={`/explore`}><button className='category-btn'>Chest</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Biceps</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Shoulder</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Back</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Triceps</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Thai</button></Link>
            <Link to={`/explore`}><button className='category-btn'>Abs</button></Link>
            <button className='category-btn'>Diet</button>
          </section>

          {/* end of section 2 */}

          {/* section 3 */}
          <section className="section-3">
            {
              homePageVideoCategoryItems.map((video) => {
                return <VideoCategoryCard key={video._id} thumbnail={video.thumbnail} title={video.title} views={video.views} xDaysAgo={video.xDaysAgo} />
              })
            }
          </section>
          {/* end of section 3 */}

        </section>
      </div>
      {/* end of main container */}

    </>
  )
}

export default Home;