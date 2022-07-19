
import './Home.css';

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
            <div className='txt-display-container'>
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


        
        

        

        </section>
      </div>
      {/* end of main container */}

    </>
  )
}

export default Home;