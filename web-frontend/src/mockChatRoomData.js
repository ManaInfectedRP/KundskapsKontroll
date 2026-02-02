// Mock data for ChatRoom redesign
export const mockChatRoomData = {
  capturedImage: '/images/captured.jpg',
  generatedPrompt: {
    prompt: 'Omvandla motivet till en japansk animefigur från 1980-talet i retro-futuristisk stil. Använd tjocka linjer, något överdrivna anletsdrag och cel-skuggor typiska för handmålade animeringar. Tillämpa livliga men något omättade färger och dramatiskt neonljus. Placera figuren i en dynamisk cyberpunkmiljö med subtilt filmbrus, glödande skyltar och stämningsfull dimma. Den slutgiltiga bilden ska kännas som en klassisk 80-talsillustration med sci-fi-tema: energisk, stiliserad, nostalgisk och helt handmålad.',
    base_caption: 'a detailed photograph'
  },
  generatedImage: '/images/generated.png',
  useRecreateMode: true,
  isLoading: false,
  analysisData: {
    colors: 'neon, blå, lila',
    lighting: 'cyberpunk, neon',
    facial_features: {
      faces_detected: 1,
      features: [
        {
          age: 28,
          gender: 'kvinna',
          hair_color: 'blond',
          skin_tone: 'ljus',
          face_shape: 'hjärtformad',
          expression: 'leende'
        }
      ]
    }
  },
  isGeneratingImage: false,
  chatHistory: [
    {
      type: 'user',
      content: 'Omvandla motivet till en japansk animefigur från 1980-talet i retro-futuristisk stil. Använd tjocka linjer, något överdrivna anletsdrag och cel-skuggor typiska för handmålade animeringar. Tillämpa livliga men något omättade färger och dramatiskt neonljus. Placera figuren i en dynamisk cyberpunkmiljö med subtilt filmbrus, glödande skyltar och stämningsfull dimma. Den slutgiltiga bilden ska kännas som en klassisk 80-talsillustration med sci-fi-tema: energisk, stiliserad, nostalgisk och helt handmålad.'
    },
    {
      type: 'system',
      content: 'Bilden har skapats • Cyberpunk kvinna med julhatt'
    }
  ]
};
