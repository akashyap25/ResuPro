import React from 'react'
import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2, FileText, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header/>
      <div>
        <section className="z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume <span className='text-primary'>With Resu Pro</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder, Tailored to Your Needs.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={'/dashboard'}>
                    <a href="/dashboard" className="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Dashboard
              </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <p className="text-md text-gray-500">Create your professional resume in just 3 simple steps</p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StepCard 
              icon={<AtomIcon className='h-8 w-8'/>} 
              title="Enter Your Details" 
              description="Fill in your information, skills, and experience. Our AI will guide you to ensure everything is in place." 
            />
            <StepCard 
              icon={<Edit className='h-8 w-8'/>} 
              title="Customize Your Resume" 
              description="Edit the generated resume to match your preferences. You can tweak sections, choose a template, and more." 
            />
            <StepCard 
              icon={<Share2 className='h-8 w-8'/>} 
              title="Download & Share" 
              description="Once satisfied, download your resume in PDF format and share it with potential employers." 
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="/auth/sign-in"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </section>

        {/* Additional Section: Why Choose Us */}
        <section className="py-8 bg-gray-50 z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">Why Choose Our AI-Powered Resume Builder?</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<FileText className='h-8 w-8'/>} 
              title="Tailored Templates" 
              description="Choose from a variety of professionally designed templates tailored to your industry." 
            />
            <FeatureCard 
              icon={<CheckCircle className='h-8 w-8'/>} 
              title="AI-Driven Suggestions" 
              description="Receive personalized suggestions based on your profile to improve your resume's impact." 
            />
            <FeatureCard 
              icon={<Users className='h-8 w-8'/>} 
              title="Collaborate Easily" 
              description="Share your resume with friends or mentors for feedback before finalizing." 
            />
          </div>
        </section>

        {/* Additional Section: Testimonials */}
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">What Our Users Say</h2>
          <TestimonialCard
            quote="This AI resume builder is a game-changer! I landed my dream job thanks to the tailored suggestions and easy-to-use templates."
            author="Jane Doe"
          />
          <TestimonialCard
            quote="Effortless and efficient! I was able to create a professional resume within minutes. Highly recommended."
            author="John Smith"
          />
        </section>
      </div>
    </div>
  )
}

function StepCard({ icon, title, description }) {
  return (
    <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      {icon}
      <h2 className="mt-4 text-xl font-bold text-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </a>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="mt-8 max-w-lg mx-auto">
      <p className="text-lg italic text-gray-700">"{quote}"</p>
      <h4 className="mt-4 font-semibold text-gray-900">- {author}</h4>
    </div>
  )
}

export default Home
