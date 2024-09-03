export const categories = [
  {
    id: 'userInfo',
    title: 'User Info',
    questions: [
      {
        id: 'name',
        type: 'text',
        label: 'What is your Name?',
        placeholder: 'Enter your name',
        required: true // This question is required
      },
      {
        id: 'email',
        type: 'text',
        label: 'What is your Email?',
        placeholder: 'Enter your email',
        required: false // This question is optional
      },
      {
        id: 'birthday',
        type: 'date',
        label: 'What is your Birthday?',
        placeholder: 'Select your birthday',
        required: false // This question is optional
      }
      // Add or remove questions as needed
    ]
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Questions',
    questions: [
      {
        id: 'idealDateNight',
        type: 'textarea',
        label: 'Describe your ideal date night',
        placeholder: 'Enter your description',
        required: false
      },
      {
        id: 'married',
        type: 'radio',
        label: 'Are you married?',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        required: false
      },
      {
        id: 'lifeDescription',
        type: 'checkbox',
        label: 'How would you describe your life?',
        options: [
          { label: 'Exciting', value: 'exciting' },
          { label: 'Challenging', value: 'challenging' },
          { label: 'Peaceful', value: 'peaceful' },
          { label: 'Adventurous', value: 'adventurous' }
        ],
        required: false
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology Use',
    questions: [
      {
        id: 'favoriteTech',
        type: 'text',
        label: 'What is your favorite piece of technology?',
        placeholder: 'Enter your favorite tech',
        required: true
      },
      {
        id: 'techUseFrequency',
        type: 'radio',
        label: 'How often do you use this technology?',
        options: [
          { label: 'Daily', value: 'daily' },
          { label: 'Weekly', value: 'weekly' },
          { label: 'Monthly', value: 'monthly' },
          { label: 'Rarely', value: 'rarely' }
        ],
        required: true
      },
      {
        id: 'techPreferences',
        type: 'checkbox',
        label: 'Which types of technology do you use regularly?',
        options: [
          { label: 'Smartphones', value: 'smartphones' },
          { label: 'Laptops', value: 'laptops' },
          { label: 'Tablets', value: 'tablets' },
          { label: 'Smart Home Devices', value: 'smart home devices' },
          { label: 'Wearables', value: 'wearables' }
        ],
        required: false
      }
    ]
  }
  // Add or remove categories as needed
]
