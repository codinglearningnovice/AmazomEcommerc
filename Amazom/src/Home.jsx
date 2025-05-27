import React from 'react'
import "./Home.css"
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81mQrJzvBgL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="kgfkmhghgk khgkhk khgfjfhgjjhgf kjkhgjkhgk"
            id="1"
            price={1}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
            }
            ratig={3}
          />
          <Product
            title="jfdgjojfg kommfofg fgfgiojfgo ifgjfgjfgji kgfjfgj"
            id="2"
            price={2}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg"
            }
            ratig={2}
          />
        </div>

        <div className="home_row">
          <Product
            title="fhgghgjjjhj jgjgjk gjkgigk gikkg"
            id="3"
            price={2}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg"
            }
            ratig={4}
          />
          <Product
            title="jjfgjgjhjgfj jfhjfjhgj gjgjgjgfgb"
            id="4"
            price={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg"
            }
            ratig={5}
          />
          <Product
            title="gjkkdfg gghh ffgg ggb"
            id="5"
            price={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg"
            }
            ratig={2}
          />
        </div>

        <div className="home_row">
          <Product
            title="hmjhk hyjyujk hjyh"
            id="6"
            price={6}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg"
            }
            ratig={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home