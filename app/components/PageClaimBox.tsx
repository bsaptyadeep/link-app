'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PageClaimBox = () => {
    const router = useRouter()
    const [profileName, setProfileName] = useState<string>("");

    const handleClaimProfile = () => {
        if (profileName) {
            router.push(`/signup?profileName=${profileName}`);
        }
    }

    return (
        <div className="mx-2 md:mx-10 px-1 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-gray-100 rounded-full px-6 py-3 flex items-center">
                <span className="text-gray-500 mr-2">Pick a</span>
                <input
                    type="text"
                    placeholder="@profile"
                    value={profileName}
                    onChange={(e) => {
                        setProfileName(e.target.value)
                    }}
                    className="bg-transparent outline-none flex-1"
                />
            </div>
            <button onClick={handleClaimProfile} className="bg-yellow-300 hover:bg-yellow-400 rounded-full px-8 py-3 font-medium">
                Claim your profile
            </button>
        </div>
    );
}

export default PageClaimBox
