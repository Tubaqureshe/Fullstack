import React from 'react'

export default function Card() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
  }
  .heading h1::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #4caf50;

}

.heading p{
    font-size: 18px;
    color: #666;
    margin-bottom: 35px;
}

    .flip-card {
        background-color: transparent;
        width: 190px;
        height: 254px;
        perspective: 1000px;
        font-family: sans-serif;
      }
      
      .title {
        font-size: 1.5em;
        font-weight: 900;
        text-align: center;
        margin: 0;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      
      .flip-card-front, .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid coral;
        border-radius: 1rem;
      }
      
      .flip-card-front {
        background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
           rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
        color: coral;
      }
      
      .flip-card-back {
        background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
           bisque 40%, rgb(255, 185, 160) 78%);
        color: black;
        transform: rotateY(180deg);
        background: pink;
      }
    `}
                </style>
                <div className="heading">
        <h1>Best Quality</h1>
        <p>
        Perfume is a mixture of fragrant essential oil and aroma compounds, fixatives, and solvents used to give the human body, objects, and living spaces a pleasant smell.
Perfume is associated in many cultures with the sensual and romantic side of life.
Bottles of some notable commercial perfumes: 
        </p>
      </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <div className="flip-card" style={{ margin: '0 10px' }}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">

                                <img src="https://m.media-amazon.com/images/I/51Olkwo2IoL.jpg" alt="Front Image" />
                            </div>
                            <div className="flip-card-back">
                                <p className="title">Perfum</p>
                                <p>PARFUM FOR WOMENWe all hold secrets close to our heart but the desire of freedom is one that is better unleashed. Wit</p>
                                {/* <img src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1200419-1.jpg" alt="Back Image" /> */}
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="flip-card" style={{ margin: '0 10px' }}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="https://static-01.daraz.pk/p/88f432fc5b42ba6d962ce9417f2f03b8.jpg" alt="Front Image" />
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Perfums</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>
                                    {/* <img src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1200419-1.jpg" alt="Back Image" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='col'>
                            <div className="flip-card" style={{ margin: '0 10px' }}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://bellavitaorganic.com/cdn/shop/products/600x600-Date.jpg?v=1680081129" alt="Front Image" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Perfums</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        {/* <img src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1200419-1.jpg" alt="Back Image" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='col'>
                        <div className="flip-card" style={{ margin: '0 10px' }}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="https://www.victoriassecretbeauty.com.my/dw/image/v2/BGTC_PRD/on/demandware.static/-/Sites-victoriasecret-MY-Library/default/dwd71b49cf/images/TotalPortFolio/Mob-TP-2.png" alt="Front Image" />
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Perfumes</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    {/* <img src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1200419-1.jpg" alt="Back Image" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
