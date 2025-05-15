'use client';

import RegisterForm from '@/components/auth/RegisterForm';

export default function AuthPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#171717] text-white p-12 items-center justify-center -mt-36">
        <div className="max-w-xl flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold mb-6">
            Connect with the Right Investors
          </h1>
          <p className="text-xl opacity-90 mb-12">
            CapitalNinja helps you find and connect with investors that match your needs.
            Save time and make better investment decisions with our powerful platform.
          </p>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="italic mb-2">
              "CapitalNinja has transformed how we connect with investors. The platform's efficiency
              and accuracy in matching us with the right investors has been invaluable."
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-500" />
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm">Founder, TechVentures</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <RegisterForm />
      </div>
    </main>
  );
} 