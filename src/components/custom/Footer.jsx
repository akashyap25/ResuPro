import React from 'react'
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">ResuPro</h2>
            <p className="text-gray-400">Effortlessly craft standout resumes with AI.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-blue-600" />
            </a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>

          {/* Copyright Notice */}
          <p className="text-gray-400">&copy; 2024 ResuPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
