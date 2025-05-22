'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('signup');
  const router = useRouter();

  const handleTestLogin = async () => {
    try {
      await router.push('/dashboard/dashboard');
    } catch (error) {
      console.error('Navigation failed:', error);
      // Fallback to window.location if router.push fails
      window.location.href = '/dashboard';
    }
  };
  
  return (
    <div className={`flex items-start justify-center min-h-screen bg-muted px-4 ${activeTab === 'signup' ? 'pt-4' : 'pt-12'}`}> {/* Set pt-0 for no padding on top */}
      <div className="w-full max-w-lg space-y-8 bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          {activeTab === 'signin' && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome to CapitalNinja
            </h2>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Sign in to your account or create a new one using magic link
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full" dir="ltr">
          <div
            role="tablist"
            className="grid grid-cols-2 bg-gray-100 p-1 rounded-lg mb-6"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'signin'}
              onClick={() => setActiveTab('signin')}
              className={`py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'signin' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'signup'}
              onClick={() => setActiveTab('signup')}
              className={`py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'signup' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Sign Up Form */}
          {activeTab === 'signup' && (
            <div role="tabpanel">
              <form className="space-y-4">
                <div>
                  <label htmlFor="signup-email" className="block text-sm font-semibold text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="signup-email"
                    className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-black">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-black">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-black">
                    Company
                  </label>
                  <input
                    id="company"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                    placeholder="Terra Capital"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-black">
                    Title
                  </label>
                  <input
                    id="title"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                    placeholder="Managing Partner"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input id="terms" type="checkbox" required />
                  <label htmlFor="terms" className="text-sm text-black">
                    I accept the{' '}
                    <a className="text-primary hover:underline" href="/terms">
                      terms and conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#908c8c] text-white hover:bg-[#908c8c]/90 w-full h-12 rounded-md text-sm font-medium transition"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Continue with Email
                </button>
              </form>
            </div>
          )}

          {/* Sign In Placeholder */}
          {activeTab === 'signin' && (
            <form className="space-y-4">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="signup-email"
                  className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:ring-primary focus:border-primary h-12 px-4"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div>
              <button
                  type="submit"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#908c8c] text-white hover:bg-[#908c8c]/90 w-full h-12 rounded-md text-sm font-medium transition"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Continue with Email
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400">For testing only</span>
          </div>
        </div>

        {/* Test Button */}
        <button
          type="button"
          onClick={handleTestLogin}
          className="cursor-pointer text-black font-semibold inline-flex items-center justify-center gap-2 rounded-md bg-white hover:bg-gray-50 w-full h-10 text-sm"
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m8 2 1.88 1.88" />
            <path d="M14.12 3.88 16 2" />
            <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
            <path d="M12 20v-9" />
            <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
            <path d="M6 13H2" />
          </svg>
          Test Login (Dev Only)
        </button>
      </div>
    </div>
  );
}