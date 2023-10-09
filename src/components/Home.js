import React, { useState } from 'react'
import biglogo from '../images/2.png';

// import image1 from '../images/image1.jpg'
// import image2 from '../images/image2.jpg'
// import image3 from '../images/image3.jpg'
// import image4 from '../images/image4.jpg'
// import image5 from '../images/image5.jpg'
// import image6 from '../images/image6.jpg'

const Home = () => {
    const [num, setnum] = useState(1)

    const pre = () => {
        setnum(prevNum => (prevNum !== 1 ? prevNum - 1 : 6))
    }

    const next = () => {
        setnum(prevNum => (prevNum !== 6 ? prevNum + 1 : 1))
    }


    return (
        <div>
            <div style={{
                backgroundImage: "url('https://abcmallorcastorage.blob.core.windows.net/images/2021/03/latitud-39-restaurant-29-60cafa3889255.jpg')",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className="row justify-content-center align-items-center p-5" style={{backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%" }}>
                    <div className="col-md-6 p-4"><img src={biglogo} style={{ border: "solid #F7C8E0 10px", width: "100%" }} /></div>
                    <div className="col-md-6">
                        <div style={{ color: "#4C4C4C", paddingTop: "80px", paddingLeft: "50px" }}>
                            <h1>SUMMER SEA</h1>
                            <p>
                                This HTML file is a template.
                                If you open it directly in the browser, you will see an empty page.
                                You can add webfonts, meta tags, or analytics to this file.
                                The build step will place the bundled scripts into the tag.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{
                backgroundImage: "url('https://abcmallorcastorage.blob.core.windows.net/images/2021/03/latitud-39-restaurant-29-60cafa3889255.jpg')",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className="row p-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%" }}>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button onClick={pre} className="but3"><i className="fa-sharp fa-solid fa-arrow-left"></i></button>
                    </div>
                    <div className="col-10 d-flex justify-content-center align-items-center">
                        <img src={`../images/image${num}.jpg`} style={{
                            border: "solid #F7C8E0 4px",
                            maxWidth: "100%",
                            maxHeight: "600px",
                        }} />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button onClick={next} className="but3"><i className="fa-sharp fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home
