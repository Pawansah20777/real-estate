import React from 'react'
import a from '../assets/img/houses/m.jpg';
import b from '../assets/img/houses/r.jpg';
import c from '../assets/img/houses/p.jpg';

export default function About() {
  return (
      <div>
      {/* First Row */}
      <div  style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>Get in touch!</h2>
          <p style={styles.content}>
            Our Commitment to exceptional service ensures your 
            real estate journey is not your transactional but transformational.
          </p>
        </div>
      </div>

      

      {/* Second Row */}
      <div style={styles.container2}>
        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={a} alt="Mukesh Yadav" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Mukesh Yadav</h2>
          {/* Add a subtitle below Mukesh Yadav */}
          <p style={styles.subtitle}>
          Real Estate Marketing Coordinator.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
            Transforming spaces into homes & houses
            i'm on a mission to match dreams width
            addresses in the world of real estate.
          </p>
        </div>


        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={b} alt="Ranjan Yadav" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Ranjan Yadav</h2>
          {/* Add a subtitle below Ranjan Yadav */}
          <p style={styles.subtitle}>
          Real Estate Attorney.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
          As a real estate enthusiast,
          i'm the bridge between dreams and dwellings,
          connecting people to their prefect abodes.
          </p>
        </div>

        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={c} alt="Pawan Kumar Sah" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Pawan Kumar sah</h2>
          {/* Add a subtitle below Pawan Kumar Sah */}
          <p style={styles.subtitle}>
          Real Estate Appraiser.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
          Dedicating each day to finding not just houses, 
          but homes that resonate with dreams, aspirations,
           and the profound essence.
          </p>    
        </div>     
      </div>
    </div>
  )
}
const styles = {

    container: {
      minHeight: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '0px',
    },
  
    box: {
      width: '500px',
      margin: '10px',
      padding: '20px',
      border: '1px solid #ccc',
      color: 'white',
      borderRadius: '100px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#8A2BE2',
      textAlign: 'center',
    },
  
    title: {
      fontSize: '18px',
      marginBottom: '2px',
    },
  
    content: {
      fontSize: '14px',
      color: 'white',
    },
  
    container2: {
      minHeight: '100px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '0px',
    },
  
    box2: {
      width: '400px',
      margin: '10px',
      padding: '20px',
      border: '1px solid #ccc',
      color: 'white',
      borderRadius: '50px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#8A2BE2',
    },
  
    title2: {
      fontSize: '18px',
      margin: '0px 110px 0px 0px', 
    },
  
    content2: {
      fontSize: '14px',
      color: 'white',
  
    },
  
    subtitle: {
      fontSize: '12px',
      color: 'lightgray',  
      borderBottom: '2px solid white', 
      margin: '0px 0px 0px 0px', 
    },
  
    imageContainer: {
      borderRadius: '50%',
      overflow: 'hidden',
      width: '50px',
      height: '50px',
     
    },
  
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    
};