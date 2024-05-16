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
            <h1 className="text-3xl font-bold text-center mb-8">About Our Cycle Management System</h1>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget semper purus. Fusce vel velit euismod, condimentum nisl id, posuere nulla. Integer eleifend, nisi nec vehicula vestibulum, metus leo tristique sapien, id ullamcorper metus arcu id odio.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget semper purus. Fusce vel velit euismod, condimentum nisl id, posuere nulla. Integer eleifend, nisi nec vehicula vestibulum, metus leo tristique sapien, id ullamcorper metus arcu id odio.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700"style={{ color: mode === 'dark' ? 'white' : '' }}>
                <li>Innovation: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Quality: Fusce vel velit euismod, condimentum nisl id, posuere nulla.</li>
                <li>Community: Integer eleifend, nisi nec vehicula vestibulum, metus leo tristique sapien.</li>
            </ul>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget semper purus. Fusce vel velit euismod, condimentum nisl id, posuere nulla. Integer eleifend, nisi nec vehicula vestibulum, metus leo tristique sapien, id ullamcorper metus arcu id odio.
            </p>
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default AboutPage;
