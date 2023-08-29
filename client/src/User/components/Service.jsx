import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

export default function Services() {
  let massage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quaerat facilis.";

  return (
    <>

    <style>
        {`
       .section-whit{
        background: white;
        padding: 70px 0;
      }
      
      .team-item{
        background: #d54869;
        text-align: center;
        margin: 20px 0;
        padding: 50px 20px 40px 20px;
        border-radius: 8px 8px;
        -webkit-transition: all 0.25s ease-in-out;
        -moz-transition:all 0.25s ease-in-out ;
        -ms-transition: all 0.25s ease-in-out;
        -o-transition :all 0.25s ease-in-out ;
        transition: all 0.25s ease-in-out;
       
      }
      
      .team-item:hover{
        background: #d35bf1;
        color: white;
      
      }
      
      .team-item h3{
        margin: 20px 0 1px 0 !important;
        color: #f04c93;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-transition: all 0.25s ease-in-out;
        -moz-transition:all 0.25s ease-in-out ;
        transition: all 0.25s ease-in-out;
      }
      
      
      .section-subtitle{
        white-space: pre-line;
      
      }
      
      .team-item:hover h3{
      color: #ddd;
      
      }
      
      .team-info{
        display: block;
        margin: 0;
      }
      
      .team-info p{
        color: #acacac;
        font-style: italic;
      }
      
      .team-info::after {
        background: #008aff;
        background: -webkit-linear-gradient(
          135deg, #941070 0%, #985bef 100%
        );
        background: -o-linear-gradient(
          135deg, #6b02ff 0%, #985bef 100%
        );
        background: -moz-linear-gradient(
          135deg, #6b02ff 0%, #985bef 100%
        );
        background: linear-gradient(
          135deg, #6b02ff 0%, #985bef 100%
        );
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 50px;
        height: 3px;
        margin-top: -20px;
      
      }
      .team-img{
        max-width: 140px;
        padding: 6px 6px;
        -webkit-border-radius: 90%;
        -moz-border-radius: 90%;
         border-radius: 90%;
      
         
      }
      
      ul.team-icon{
        margin-top: 25px;
      }
      ul.team-icon li{
       display: inline-block;
       margin: 0 3px;
       -webkit-transition: all 0.25s ease-in-out;
       -moz-transition:all 0.25s ease-in-out ;
       -ms-transition: all 0.25s ease-in-out;
       -o-transition :all 0.25s ease-in-out ;
       transition: all 0.25s ease-in-out;
      
      }
      ul.team-icon li a{
        margin: 0;
        display: inline-block;
        padding: 8px 8px;
        width: 34px;
        height: 34px;
        font-size: 18px;
        line-height: 18px;
        background-color: #fff;
        border-radius: 50%;
        color: #fff;
        transition: background-color 0.3s, color 0.3s;
      }
       ul.team-icon li a.twitter{
        background-color: #4099ff;
       }
       ul.team-icon li a.facebook{
        background-color: #db5998;
       }
       ul.team-icon li a.instagram{
        background-color: #d82433;
       }
       .team-icon li a:hover{
      color: #1d1a1a;
      -webkit-transition: all 0.25s ease-in-out;
      -moz-transition:all 0.25s ease-in-out ;
      -ms-transition: all 0.25s ease-in-out;
      -o-transition :all 0.25s ease-in-out ;
      transition: all 0.25s ease-in-out;
       }
       .section-title{
        font-size: 50px;
        color: #000;
        margin-bottom: 25px;
        position: relative;
       }
      
       .section-title::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        display: block;
        margin: 0 auto;
        background-color: #4caf50;
       }
       
        `}
    </style>
    <section className='section-white'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-10'>
            <h1 className='section-title'>
              The Team Behind Pacifico
            </h1>
            <p className='section-subtitle'>{massage}</p>
          </div>

          <div className='col-mx-5 col-md-4'>
            <div className='team-item justify-content-center'>
              <img src="https://10pearls.com/wp-content/uploads/2023/03/IOS-Android-Developers.png" className='team-img' alt="pic" height={150} />
              <h3>ALEXANDRA SMITHS</h3>
              <div className='team-info'>
                <p>Web Developers</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://10pearls.com/wp-content/uploads/2023/03/SQA-Engineers.png" className='team-img' alt="pic" height={150} />
              <h3>ELISA JOHANSON</h3>
              <div className='team-info'>
                <p>Marketing Manager</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://images.medindia.net/amp-images/beauty/skin-care-tips-for-working-women.jpg" className='team-img' alt="pic" height={150} />
              <h3>JOHNATHAN HAWKINS</h3>
              <div className='team-info'>
                <p>Head of SEO</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}