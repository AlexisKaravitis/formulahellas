'use client';

import Link from 'next/link';
import { CONTACT_EMAIL, COMING_SOON } from '@/lib/site-config';

export default function ScrutineerApplicationPage() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfpjrcRlmrMmDGh2-etFPPL07EenVwvzKZeleUCl-UE1Gwr4A/viewform?usp=dialog";

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Link href="/join-us" className="text-[#2D4DF5] hover:text-[#1E34CC] mb-8 inline-block font-bold">
          &larr; Back to Join Us
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Become a Scrutineer</h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Apply via Google Form</h2>
          <p className="text-lg text-blue-800 mb-8">
            Applications are handled through our Google Form. Use the button below to apply.
          </p>
          
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#2D4DF5] text-white font-bold rounded-xl hover:bg-[#1E34CC] transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            Open Google Form
          </a>
        </div>

        <p className="text-gray-600">
          If you have any questions, please contact us at{' '}
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2D4DF5] underline">{CONTACT_EMAIL}</a>
          ) : (
            <span className="font-semibold">{COMING_SOON}</span>
          )}
        </p>
      </div>
    </div>
  );
}
