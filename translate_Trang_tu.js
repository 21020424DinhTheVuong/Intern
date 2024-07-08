// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyBFDy3Idxce0_8r7PxI-Orv1RQpmAO8nBA";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 0.2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

async function run() {
    const parts = [
        { text: "input: {\n            \"word\": \"địa chỉ\",\n            \"_word\": \"dia chi\",\n            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",\n            \"tl\": \"Danh từ\"\n        }," },
        { text: "output: {\n            \"word\": \"địa chỉ\",\n            \"_word\": \"dia chi\",\n            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"address\",\n            \"tl_en\": \"Noun\"\n        }," },
        { text: "input: {    \"data\": [        {            \"word\": \"kia\",            \"_word\": \"kia\",            \"description\": \"Từ dùng để chỉ một sự vật, địa điểm, hiện tượng ở xa vị trí của người nói, nhưng trong phạm vi có thể nhìn thấy cụ thể.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (2 người) (đại từ)\",            \"_word\": \"chung toi (2 nguoi) (dai tu)\",            \"description\": \"Chỉ hai người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (3 người) (đại từ)\",            \"_word\": \"chung toi (3 nguoi) (dai tu)\",            \"description\": \"Chỉ ba người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (4 người) (đại từ)\",            \"_word\": \"chung toi (4 nguoi) (dai tu)\",            \"description\": \"Chỉ bốn người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (5 người) (đại từ)\",            \"_word\": \"chung toi (5 nguoi) (dai tu)\",            \"description\": \"Chỉ năm người ở ngôi thứ 3 số nhiều.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"chúng tôi (đại từ)\",            \"_word\": \"chung toi (dai tu)\",            \"description\": \"Tổ hợp dùng để nhân danh một số người mà tự xưng.\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"các bạn (2 người) \",            \"_word\": \"cac ban (2 nguoi) \",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"họ (2 người) (đại từ)\",            \"_word\": \"ho (2 nguoi) (dai tu)\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"họ (đại từ)\",            \"_word\": \"ho (dai tu)\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"ai\",            \"_word\": \"ai\",            \"description\": \"Từ dùng để nói về người nào đó, không rõ. \",            \"tl\": \"Đại từ\"        },        {            \"word\": \"bao nhiêu?\",            \"_word\": \"bao nhieu?\",            \"description\": \"Số lượng không rõ nhiều hay ít (thường dùng để hỏi).\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"các bạn\",            \"_word\": \"cac ban\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"là gì?\",            \"_word\": \"la gi?\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"mấy giờ?\",            \"_word\": \"may gio?\",            \"description\": \"\",            \"tl\": \"Đại từ\"        },        {            \"word\": \"thế nào?\",            \"_word\": \"the nao?\",            \"description\": \"Tổ hợp biểu thị có một điều muốn hỏi.\",            \"tl\": \"Đại từ\"        }" },
        { text: "output: {\n  \"data\": [\n    {\n      \"word\": \"kia\",\n      \"_word\": \"kia\",\n      \"description\": \"Từ dùng để chỉ một sự vật, địa điểm, hiện tượng ở xa vị trí của người nói, nhưng trong phạm vi có thể nhìn thấy cụ thể.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"that\",\n      \"tl_en\": \"Demonstrative Pronoun\"\n    },\n    {\n      \"word\": \"chúng tôi (2 người) (đại từ)\",\n      \"_word\": \"chung toi (2 nguoi) (dai tu)\",\n      \"description\": \"Chỉ hai người ở ngôi thứ 3 số nhiều.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"we (2 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"chúng tôi (3 người) (đại từ)\",\n      \"_word\": \"chung toi (3 nguoi) (dai tu)\",\n      \"description\": \"Chỉ ba người ở ngôi thứ 3 số nhiều.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"we (3 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"chúng tôi (4 người) (đại từ)\",\n      \"_word\": \"chung toi (4 nguoi) (dai tu)\",\n      \"description\": \"Chỉ bốn người ở ngôi thứ 3 số nhiều.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"we (4 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"chúng tôi (5 người) (đại từ)\",\n      \"_word\": \"chung toi (5 nguoi) (dai tu)\",\n      \"description\": \"Chỉ năm người ở ngôi thứ 3 số nhiều.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"we (5 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"chúng tôi (đại từ)\",\n      \"_word\": \"chung toi (dai tu)\",\n      \"description\": \"Tổ hợp dùng để nhân danh một số người mà tự xưng.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"we\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"các bạn (2 người) \",\n      \"_word\": \"cac ban (2 nguoi) \",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"you (2 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"họ (2 người) (đại từ)\",\n      \"_word\": \"ho (2 nguoi) (dai tu)\",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"they (2 people)\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"họ (đại từ)\",\n      \"_word\": \"ho (dai tu)\",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"they\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"ai\",\n      \"_word\": \"ai\",\n      \"description\": \"Từ dùng để nói về người nào đó, không rõ. \",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"who\",\n      \"tl_en\": \"Interrogative Pronoun\"\n    },\n    {\n      \"word\": \"bao nhiêu?\",\n      \"_word\": \"bao nhieu?\",\n      \"description\": \"Số lượng không rõ nhiều hay ít (thường dùng để hỏi).\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"how many?\",\n      \"tl_en\": \"Interrogative Pronoun\"\n    },\n    {\n      \"word\": \"các bạn\",\n      \"_word\": \"cac ban\",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"you\",\n      \"tl_en\": \"Personal Pronoun\"\n    },\n    {\n      \"word\": \"là gì?\",\n      \"_word\": \"la gi?\",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"what?\",\n      \"tl_en\": \"Interrogative Pronoun\"\n    },\n    {\n      \"word\": \"mấy giờ?\",\n      \"_word\": \"may gio?\",\n      \"description\": \"\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"what time?\",\n      \"tl_en\": \"Interrogative Phrase\"\n    },\n    {\n      \"word\": \"thế nào?\",\n      \"_word\": \"the nao?\",\n      \"description\": \"Tổ hợp biểu thị có một điều muốn hỏi.\",\n      \"tl\": \"Đại từ\",\n      \"word_en\": \"how?\",\n      \"tl_en\": \"Interrogative Adverb\"\n    }\n  ]\n}" },

        ///////////////////
        { text: "input: {    \"data\": [        {            \"word\": \"quanh năm\",            \"_word\": \"quanh nam\",            \"description\": \"Suốt từ đầu năm đến cuối năm.\",            \"tl\": \"Trạng từ\"        },        {            \"word\": \"đằng sau\",            \"_word\": \"dang sau\",            \"description\": \"\",            \"tl\": \"Trạng từ\"        },        {            \"word\": \"đằng trước\",            \"_word\": \"dang truoc\",            \"description\": \"\",            \"tl\": \"Trạng từ\"        }    ]}" },
        { text: "output: " },
    ];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    console.log(JSON.parse(result.response.text()));
}

run();