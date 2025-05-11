import React from 'react'

import Head from 'next/head';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header'
import SideBar from '@/components/SideBarComponent'

const Home = () => {
    return (
        <div className='w-full'>
            <Head>
                <title>JobTrackr – Your Personal Job Tracker</title>
                <meta name="description" content="Track job applications easily with JobTrackr" />
            </Head>

            <Header />

            <main className="bg-white min-h-screen">
                <section className="text-center py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                    <h1 className="text-5xl font-bold mb-4">Stay on top of your job hunt</h1>
                    <p className="text-lg max-w-xl mx-auto mb-6">
                        JobTrackr helps you organize and track all your job applications in one simple, intuitive dashboard.
                    </p>
                    <a href="#features" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
                        See Features
                    </a>
                </section>

                <section id="features" className="py-20 px-6 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <FeatureCard
                            title="Track Applications"
                            description="Log each application with company name, role, status, and notes."
                            icon="📋"
                        />
                        <FeatureCard
                            title="Dashboard View"
                            description="Visualize your job search progress in one place."
                            icon="📊"
                        />
                        <FeatureCard
                            title="Reminders & Updates"
                            description="Never miss a follow-up or deadline with notifications."
                            icon="⏰"
                        />
                    </div>
                </section>

                <section className="bg-white py-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-lg mb-6">Create your free account and take control of your job search.</p>
                    <a href="/signup" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
                        Get Started
                    </a>
                </section>
            </main>

        </div>
    )
}

export default Home