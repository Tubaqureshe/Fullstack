import React from 'react'

export default function About() {
  return (
    <>
    <style>
        {`

          .heading {
            display: flex; 
            justify-content: center;
            align-items: center;
            width: 90%;
            flex-direction: column;
            text-align: center;
            margin: 20px auto;
            
             
            
          }
          .heading h1{
            font-size: 50px;
            color: #000;
            margin-bottom: 25px;
            position: relative;
            font-family: 'Your Custom Font', sans-serif;
          }
          .heading h1::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 4px;
            display: block;
            margin: 0 auto;
            background-color: #4caf50;
            font-family: 'Your Custom Font', sans-serif;
        
        }
        
        .heading p{
            font-size: 18px;
            color: #666;
            margin-bottom: 35px;
            font-family: 'Your Custom Font', sans-serif;
        }
        
        .container{
            width: 90%;
            margin: 0 auto;
            padding: 10px;
        
        }
        
        .about{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        
        }
        
        
        
        .about-image{
            flex: 1;
            margin-right: 40px;
            overflow: hidden;
        
        }
        
        
        .about-image img{
            max-width: 100%;
            height: auto;
            display: block;
            transition: 0.5s ease;
        }
        
        .about-image:hover img{
            transform: scale(1.2);
        }
        .about-content{
            flex: 1;
        }
        
        .about-content h2{
            font-size: 23px;
            margin-bottom: 15px;
            color: #333;
        }
        
        .about-content p{
            font-size: 18px;
            line-height: 1.5;
            color: #000;
        }
        
        
        .about-content .read-more{
            display: inline-block;
            padding: 10px 20px;
            color: #fff;background-color: #4caf50;
            font-size: 19px;
            text-decoration: none;
            border-radius: 25px;
            margin-top: 15px;
            transition: o.3s ease;
        
        }
        .about-content .read-more:hover{
        
            background-color: #3e8e41;
            transition: o.3s ease;
        
        }
        
          .card {
            margin: 0 auto;
            /* max-width: 800px; */
          }
        `}
    </style>
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae
          excepturi assumenda provident autem quas.
        </p>
      </div>
      <div className="containter">
        <section className="about">
          <div className="about-image">
            <img src="https://www.perfume.com/blog/wp-content//uploads/2023/06/best-musk-perfumes-scaled.jpeg" />
          </div>
          <div className="about-content right-align">
            <h2>Introduction</h2>
            <p>
            Perfume is described in a musical metaphor as having three 'notes', making the harmonious chord of the scent.
Top notes: The scents that are perceived immediately on application of a perfume. Top notes form a person's initial impression of a perfume and thus, they are very important in the selling of a perfume. The scents of this note class are usually described as "fresh," "assertive" or "sharp." 
The compounds that contribute to top notes are strong in scent, very volatile, and evaporate quickly
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
