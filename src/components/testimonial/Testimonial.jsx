import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=1480&t=st=1715842665~exp=1715843265~hmac=4f148f10c8f366b91a4b24cc787ce4f5084793b14d73579b67ad96e954b4af94" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Using the CycleHub website has been a game-changer for me! It's so convenient to reserve a cycle for my daily commute to college. No more hassle of searching for available cycles on campus. Highly recommended!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ravi CSE - 2020</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">CS20B2099</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715842377~exp=1715845977~hmac=a9a9022223beb980301bafa0241755b00add4f7f249eabb9c99d4ff7eb9bd155&w=1480" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">The CycleHub website is a lifesaver! It not only promotes eco-friendly transportation but also saves us time and effort. With its intuitive interface and reliable service, cycling around campus has become my favorite part of the day.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vinay CSE - 2020</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">CS20B1026</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=1480&t=st=1715842695~exp=1715843295~hmac=8528204a320dd4978eaf952a4e6a691ccd53145e792f54d7643d92fa0ca8a684" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">As a senior, I've seen the CycleHub system evolve over the years, and I must say, it's now at its peak efficiency. From quick bookings to easy returns, it's made campus life much smoother. Kudos to the team behind it!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sanjay - ECE 2021</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">EC21B1099</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial