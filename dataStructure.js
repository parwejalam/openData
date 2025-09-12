const projectStructure = {
    qaida: {
        name: 'Qaida',
        description: 'Foundational Learning - Alphabet Education',
        icon: '📚',
        subfolders: {
            videos: {
                name: 'Videos',
                description: 'Video learning resources',
                icon: '🎥',
                jsonFiles: [
                    {
                        language: 'English',
                        path: 'projects/qaida/videos/en/video.json',
                        description: 'English alphabet and phonics learning videos'
                    },
                    {
                        language: 'Hindi',
                        path: 'projects/qaida/videos/hi/video.json',
                        description: 'Hindi Varnamala (alphabet) learning videos'
                    },
                    {
                        language: 'Arabic',
                        path: 'projects/qaida/videos/ar/video.json',
                        description: 'Arabic alphabet and Urdu learning videos'
                    },
                    {
                        language: 'Urdu',
                        path: 'projects/qaida/videos/ur/video.json',
                        description: 'Urdu alphabet and pronunciation videos'
                    }
                ]
            }
        }
    }
    // Future projects can be added here
    // example: {
    //     name: 'Example Project',
    //     description: 'Another educational project',
    //     icon: '🔬',
    //     subfolders: { ... }
    // }
};
