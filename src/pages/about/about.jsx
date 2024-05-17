import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext'

const AboutPage = () => {
    const context = useContext(myContext)
    const { mode } = context
  return (
    <Layout>
        <div className=" min-h-screen py-8 px-4 sm:px-6 lg:px-8" style={{ color: mode === 'dark' ? 'white' : '' }}>
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">About Our CycleHub System</h1>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                CycleHub was born out of a passion for cycling and a vision to make bike rentals accessible and convenient for everyone. Recognizing the growing demand for eco-friendly transportation options, we developed an innovative cycle rental management system that streamlines the process of renting and returning bicycles. Our goal is to promote a healthier lifestyle while reducing the carbon footprint, one ride at a time.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              At CycleHub, our mission is to revolutionize urban mobility by providing a seamless and user-friendly cycle rental experience. We aim to empower communities to embrace sustainable transportation through our advanced rental system, fostering a greener and more connected world. 
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700"style={{ color: mode === 'dark' ? 'white' : '' }}>
<li>Innovation: We are committed to continually advancing our technology to enhance user experience and operational efficiency.</li>
<li>Quality: Our dedication to excellence ensures that both our bikes and our software meet the highest standards of performance and reliability.</li>
<li>Community: We believe in building strong, supportive communities by making cycling accessible and enjoyable for all.</li>
            </ul>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              The success of CycleHub is driven by a talented and dedicated team. Our front-end developers, Prabhas, Rutviz, and Dileep, specialize in creating intuitive and engaging interfaces that ensure a smooth user experience. On the back end, Praneeth and Siddarath work tirelessly to develop robust and scalable systems that keep our operations running seamlessly. Together, we are committed to making CycleHub the premier choice for bike rentals.  
            </p>
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default AboutPage;
