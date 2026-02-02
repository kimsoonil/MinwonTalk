import { generateChatResponse } from './shared/api/mock/chat';
import { searchMinwons } from './shared/api/mock/minwons';

console.log('--- Testing searchMinwons("이직") ---');
const searchResults = searchMinwons('이직');
console.log(`Found ${searchResults.length} results:`);
searchResults.forEach((m) => console.log(`- ${m.name} (${m.id})`));

console.log('\n--- Testing generateChatResponse("이직") ---');
const chatResponse = generateChatResponse('이직');
console.log('Message:', chatResponse.message);
console.log('Related IDs:', chatResponse.relatedMinwons);
