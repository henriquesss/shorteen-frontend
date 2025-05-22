"use client"

import { URLTable } from '../components/URLTable';
import { URLAccessChart } from '../components/URLAccessChart';
import { AccessPeriodsChart } from '@/components/AccessPeriodsChart/indext';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center justify-items-center gap-2">
          <p className="text-1xl font-bold text-gray-700">Shorteen</p>
          <p className="text-gray-500">A url shortener for quick links</p>
        </div>

        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md sm:text-center">
                  <form action="#">
                      <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                          <div className="relative w-full">
                              <label className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12.5l-2 2a3 3 0 104.24 4.24l2-2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.5 7.5l2-2a3 3 0 10-4.24-4.24l-2 2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.5 11.5l3-3" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                              <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your url" type="text" id="url" />
                          </div>
                          <div>
                              <button
                                type="submit"
                                className="py-3 px-5 w-full text-sm font-medium text-center text-gray-900 rounded-lg border cursor-pointer bg-gray-50 border-gray-300 sm:rounded-none sm:rounded-r-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300"
                              >
                                Short
                              </button>
                          </div>
                      </div>
                      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.</div>
                  </form>
              </div>
          </div>
        </section>

        <section className='w-full'>
          <URLTable/>

          <div className='flex justify-between items-center'>
            <AccessPeriodsChart/>
            <URLAccessChart/>
          </div>
        </section>
      </div>
    </>
  );
}
