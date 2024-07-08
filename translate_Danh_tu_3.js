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

        /////////////////////////////////
        { text: "input: {        \"word\": \"bồn rửa bát\",        \"_word\": \"bon rua bat\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"sink\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bông hoa\",        \"_word\": \"bong hoa\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"flower\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bốt cảnh sát\",        \"_word\": \"bot canh sat\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"police box\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bốt điện\",        \"_word\": \"bot dien\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"telephone booth\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bột giặt\",        \"_word\": \"bot giat\",        \"description\": \"Xà phòng giặt ở dạng bột.\",        \"tl\": \"Danh từ\",        \"word_en\": \"washing powder\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bột màu\",        \"_word\": \"bot mau\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"pigment\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bột ngọt\",        \"_word\": \"bot ngot\",        \"description\": \"Muối của một a-xít a-min, có dạng kết tinh màu trắng, dễ tan trong nước, thường cho vào thức ăn để tăng vị ngọt.\",        \"tl\": \"Danh từ\",        \"word_en\": \"MSG\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bờ biển\",        \"_word\": \"bo bien\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"coast\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bờ rào\",        \"_word\": \"bo rao\",        \"description\": \"Hàng rào bao quanh sân, vườn.\",        \"tl\": \"Danh từ\",        \"word_en\": \"fence\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bờ ruộng\",        \"_word\": \"bo ruong\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"field bund\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bơm (cái bơm)\",        \"_word\": \"bom (cai bom)\",        \"description\": \"Dụng cụ dùng để đưa chất lỏng, chất khí từ một nơi đến nơi khác, hoặc để nén khí, hút khí.\",        \"tl\": \"Danh từ\",        \"word_en\": \"pump\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bờm tóc\",        \"_word\": \"bom toc\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"bangs\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"Bra-xin (nước Bra-xin)\",        \"_word\": \"bra-xin (nuoc bra-xin)\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"Brazil\",        \"tl_en\": \"Proper Noun\"      },      {        \"word\": \"Bru-nây (nước Bru-nây)\",        \"_word\": \"bru-nay (nuoc bru-nay)\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"Brunei\",        \"tl_en\": \"Proper Noun\"      },      {        \"word\": \"cỏ\",        \"_word\": \"co\",        \"description\": \"Cây thân mềm và thấp, thường mọc lan thành đám trên mặt đất, có nhiều loài khác nhau, dùng để làm thức ăn cho trâu, bò, ngựa, v.v.\",        \"tl\": \"Danh từ\",        \"word_en\": \"grass\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bụi đời\",        \"_word\": \"bui doi\",        \"description\": \"Cảnh sống lang thang, vất vưởng, không nhà cửa, không nghề nghiệp.\",        \"tl\": \"Danh từ\",        \"word_en\": \"street life\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bụi phấn\",        \"_word\": \"bui phan\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"chalk dust\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"Bun-ga-ri (nước Bun-ga-ri)\",        \"_word\": \"bun-ga-ri (nuoc bun-ga-ri)\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"Bulgaria\",        \"tl_en\": \"Proper Noun\"      },      {        \"word\": \"bùn\",        \"_word\": \"bun\",        \"description\": \"Đất nhão hoà lẫn trong nước.\",        \"tl\": \"Danh từ\",        \"word_en\": \"mud\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"bụng\",        \"_word\": \"bung\",        \"description\": \"Bộ phận cơ thể người hoặc động vật, chứa ruột, dạ dày, v.v.\",        \"tl\": \"Danh từ\",        \"word_en\": \"stomach\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buổi chiều\",        \"_word\": \"buoi chieu\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"afternoon\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buổi đêm\",        \"_word\": \"buoi dem\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"night\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buổi sáng\",        \"_word\": \"buoi sang\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"morning\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buổi tối\",        \"_word\": \"buoi toi\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"evening\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buổi trưa\",        \"_word\": \"buoi trua\",        \"description\": \"\",        \"tl\": \"Danh từ\",        \"word_en\": \"noon\",        \"tl_en\": \"Noun\"      },      {        \"word\": \"buôn làng\",        \"_word\": \"buon lang\",        \"description\": \"Xóm làng ở vùng dân tộc thiểu số miền Nam Việt Nam.\",        \"tl\": \"Danh từ\",        \"word_en\": \"village\",        \"tl_en\": \"Noun\"      },         {      \"word\": \"buồng trứng\",      \"_word\": \"buong trung\",      \"description\": \"Bộ phận sản sinh ra trứng trong cơ thể phụ nữ hoặc động vật giống cái.\",      \"tl\": \"Danh từ\",      \"word_en\": \"ovary\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"búp bê\",      \"_word\": \"bup be\",      \"description\": \"Đồ chơi hình em bé, thường làm bằng nhựa, vải.\",      \"tl\": \"Danh từ\",      \"word_en\": \"doll\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bút\",      \"_word\": \"but\",      \"description\": \"Đồ dùng để viết, kẻ, vẽ thành nét.\",      \"tl\": \"Danh từ\",      \"word_en\": \"pen\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bút bi\",      \"_word\": \"but bi\",      \"description\": \"Bút có ngòi là viên bi nhỏ bằng kim loại gắn ở đầu một ống mực đặc.\",      \"tl\": \"Danh từ\",      \"word_en\": \"ballpoint pen\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bút dạ\",      \"_word\": \"but da\",      \"description\": \"Bút có ngòi là một mũi nhỏ bằng dạ gắn ở đầu một ống chứa mực dầu.\",      \"tl\": \"Danh từ\",      \"word_en\": \"marker pen\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bút màu\",      \"_word\": \"but mau\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"colored pencil\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bút máy\",      \"_word\": \"but may\",      \"description\": \"Bút có bộ phận chứa mực để mực rỉ dần ra ở đầu ngòi bút khi viết.\",      \"tl\": \"Danh từ\",      \"word_en\": \"fountain pen\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bữa cơm\",      \"_word\": \"bua com\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"meal\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bức tranh\",      \"_word\": \"buc tranh\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"painting\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bức tường\",      \"_word\": \"buc tuong\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"wall\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bước chân\",      \"_word\": \"buoc chan\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"footstep\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"bưu tá\",      \"_word\": \"buu ta\",      \"description\": \"Nhân viên bưu điện làm nhiệm vụ đưa thư từ, báo chí đến tay người nhận.\",      \"tl\": \"Danh từ\",      \"word_en\": \"postman\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"ca\",      \"_word\": \"ca\",      \"description\": \"Đồ dùng để uống nước, có quai, thành đứng, thường được làm bằng kim loại hoặc nhựa.\",      \"tl\": \"Danh từ\",      \"word_en\": \"cup\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"ca nô\",      \"_word\": \"ca no\",      \"description\": \"Thuyền máy gọn nhẹ, có tốc độ lớn, khả năng cơ động cao, thường dùng để chạy trên quãng đường ngắn.\",      \"tl\": \"Danh từ\",      \"word_en\": \"canoe\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"Cà Mau\",      \"_word\": \"ca mau\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"Ca Mau\",      \"tl_en\": \"Proper Noun\"    },    {      \"word\": \"cá kho\",      \"_word\": \"ca kho\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"caramelized fish\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cái bè\",      \"_word\": \"cai be\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"raft\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cái gương\",      \"_word\": \"cai guong\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"mirror\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cái nhíp\",      \"_word\": \"cai nhip\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"tweezers\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cái túi\",      \"_word\": \"cai tui\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"bag\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"Cam-pu-chia (nước Cam-pu-chia)\",      \"_word\": \"cam-pu-chia (nuoc cam-pu-chia)\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"Cambodia\",      \"tl_en\": \"Proper Noun\"    },    {      \"word\": \"cảnh vật\",      \"_word\": \"canh vat\",      \"description\": \"Cảnh thiên nhiên và sự vật cụ thể bày ra trước mắt.\",      \"tl\": \"Danh từ\",      \"word_en\": \"scenery\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cánh tay\",      \"_word\": \"canh tay\",      \"description\": \"Bộ phận của tay từ bả vai đến cổ tay.\",      \"tl\": \"Danh từ\",      \"word_en\": \"arm\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cạnh\",      \"_word\": \"canh\",      \"description\": \"Chỗ một mặt phẳng tiếp giáp với một mặt phẳng khác trong cùng một vật.\",      \"tl\": \"Danh từ\",      \"word_en\": \"edge\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cạnh bên (toán)\",      \"_word\": \"canh ben (toan)\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"lateral side\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cạnh đáy\",      \"_word\": \"canh day\",      \"description\": \"Cạnh vuông góc với một đường cao đã chọn trong một hình tam giác, hình thang hoặc hình bình hành.\",      \"tl\": \"Danh từ\",      \"word_en\": \"base\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cạnh đối diện\",      \"_word\": \"canh doi dien\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"opposite side\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"Cao Bằng\",      \"_word\": \"cao bang\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"Cao Bang\",      \"tl_en\": \"Proper Noun\"    },    {      \"word\": \"cao độ\",      \"_word\": \"cao do\",      \"description\": \"Độ cao (thường nói về âm thanh).\",      \"tl\": \"Danh từ\",      \"word_en\": \"pitch\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cao nguyên\",      \"_word\": \"cao nguyen\",      \"description\": \"Vùng đất rộng lớn và cao, xung quanh có sườn dốc rõ rệt.\",      \"tl\": \"Danh từ\",      \"word_en\": \"plateau\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cát\",      \"_word\": \"cat\",      \"description\": \"Đá vụn thành hạt nhỏ dưới 2 milimet, có thành phần chủ yếu là thạch anh và các khoáng vật khác.\",      \"tl\": \"Danh từ\",      \"word_en\": \"sand\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cày\",      \"_word\": \"cay\",      \"description\": \"Nông cụ có lưỡi bằng sắt, gang, dùng sức kéo để lật, xới hoặc làm vỡ lớp đất trồng trọt.\",      \"tl\": \"Danh từ\",      \"word_en\": \"plow\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cặp sách\",      \"_word\": \"cap sach\",      \"description\": \"Đồ dùng thường bằng da, vải nhựa, v.v., có các ngăn, dùng để đựng sách vở, đồ dùng học tập của học sinh.\",      \"tl\": \"Danh từ\",      \"word_en\": \"schoolbag\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cặp tóc\",      \"_word\": \"cap toc\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"hair clip\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cần khởi động\",      \"_word\": \"can khoi dong\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"crankshaft\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu chuyện\",      \"_word\": \"cau chuyen\",      \"description\": \"Sự việc hoặc chuyện được nói ra.\",      \"tl\": \"Danh từ\",      \"word_en\": \"story\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu đố\",      \"_word\": \"cau do\",      \"description\": \"Câu văn vần mô tả đặc điểm người, vật, hiện tượng, v.v. một cách lắt léo hoặc úp mở để thử tài suy đoán hoặc vui chơi giải trí.\",      \"tl\": \"Danh từ\",      \"word_en\": \"riddle\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu đối\",      \"_word\": \"cau doi\",      \"description\": \"Thể văn gồm hai vế câu có số lượng từ bằng nhau và đối chọi nhau cả về lời lẫn ý.\",      \"tl\": \"Danh từ\",      \"word_en\": \"parallel sentences\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu đơn\",      \"_word\": \"cau don\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"simple sentence\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu ghép\",      \"_word\": \"cau ghep\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"compound sentence\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu thơ\",      \"_word\": \"cau tho\",      \"description\": \"Đơn vị cơ bản của lời thơ, do từ tạo thành, có một tiết tấu nhất định, thường viết bằng một dòng.\",      \"tl\": \"Danh từ\",      \"word_en\": \"verse\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"câu văn\",      \"_word\": \"cau van\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"sentence\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cầu giao\",      \"_word\": \"cau giao\",      \"description\": \"Bộ phận có hình giống con dao, lắp ở chỗ đầu mối mạch điện, dùng để đóng, ngắt mạch điện.\",      \"tl\": \"Danh từ\",      \"word_en\": \"switch\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cầu thủ\",      \"_word\": \"cau thu\",      \"description\": \"Người tập luyện hoặc thi đấu một môn bóng nào đó.\",      \"tl\": \"Danh từ\",      \"word_en\": \"player\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cầu tre\",      \"_word\": \"cau tre\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"bamboo bridge\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cáp treo\",      \"_word\": \"cap treo\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"cable car\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cầu trượt\",      \"_word\": \"cau truot\",      \"description\": \"Đồ chơi của trẻ em, gồm một đường máng dài có mặt phẳng nhẵn, có thành chắn hai bên, đặt dốc nghiêng để trượt từ trên xuống.\",      \"tl\": \"Danh từ\",      \"word_en\": \"slide\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cầu vượt\",      \"_word\": \"cau vuot\",      \"description\": \"Cầu bắc vòng lên cao để vượt qua con đường khác mà không cắt ngang, không làm ảnh hưởng đến giao thông ở cả hai tuyến.\",      \"tl\": \"Danh từ\",      \"word_en\": \"overpass\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cây ăn quả\",      \"_word\": \"cay an qua\",      \"description\": \"Cây trồng lấy quả để ăn, như cam, chanh, dứa, xoài, v.v.\",      \"tl\": \"Danh từ\",      \"word_en\": \"fruit tree\",      \"tl_en\": \"Noun\"    },    {      \"word\": \"cây bàng\",      \"_word\": \"cay bang\",      \"description\": \"\",      \"tl\": \"Danh từ\",      \"word_en\": \"Terminalia catappa tree\",      \"tl_en\": \"Noun\"    }," },
        { text: "output: " },

        ///////////////////////////////
        { text: "input: {\n            \"word\": \"cây cổ thụ\",\n            \"_word\": \"cay co thu\",\n            \"description\": \"Cây to sống đã lâu năm.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây cối \",\n            \"_word\": \"cay coi \",\n            \"description\": \"Cây (nói khái quát).\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây đa\",\n            \"_word\": \"cay da\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây gỗ\",\n            \"_word\": \"cay go\",\n            \"description\": \"Cây có thân to, cho gỗ dùng để xây dựng nhà cửa, đóng đồ đạc, v.v.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây khế\",\n            \"_word\": \"cay khe\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây ngô\",\n            \"_word\": \"cay ngo\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây phượng\",\n            \"_word\": \"cay phuong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây sả\",\n            \"_word\": \"cay sa\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây số\",\n            \"_word\": \"cay so\",\n            \"description\": \"Trụ xây hoặc cột chôn cạnh đường để làm mốc cho khoảng cách từng kilomet một, trên đó có ghi số kilomet tính từ một nơi nào đó hoặc cách xa một nơi nào đó.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây thân gỗ\",\n            \"_word\": \"cay than go\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây tre\",\n            \"_word\": \"cay tre\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây trồng \",\n            \"_word\": \"cay trong \",\n            \"description\": \"(xem cây cối)\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cây xanh\",\n            \"_word\": \"cay xanh\",\n            \"description\": \"Cây cỏ được trồng để bảo vệ môi trường, nói chung.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cha\",\n            \"_word\": \"cha\",\n            \"description\": \"Người đàn ông có con, trong quan hệ với con (có thể dùng để xưng gọi).\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cha mẹ\",\n            \"_word\": \"cha me\",\n            \"description\": \"Cha và mẹ (nói khái quát) trong quan hệ với con.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chả cá\",\n            \"_word\": \"cha ca\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chai\",\n            \"_word\": \"chai\",\n            \"description\": \"Đồ đựng bằng thuỷ tinh hoặc nhựa cổ nhỏ và dài, thường dùng để đựng chất lỏng.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chai nước\",\n            \"_word\": \"chai nuoc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chàng trai\",\n            \"_word\": \"chang trai\",\n            \"description\": \"Người đàn ông trẻ tuổi có vẻ đáng mến, đáng yêu.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chảo\",\n            \"_word\": \"chao\",\n            \"description\": \"Đồ dùng thường được làm bằng nhôm, gang, miệng rộng, lòng nông, có hai quai hoặc cán để cầm, dùng để xào, rán thức ăn.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cháu gái\",\n            \"_word\": \"chau gai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cháu ngoại\",\n            \"_word\": \"chau ngoai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cháu nội\",\n            \"_word\": \"chau noi\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"cháu trai\",\n            \"_word\": \"chau trai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chày\",\n            \"_word\": \"chay\",\n            \"description\": \"Dụng cụ dùng để giã, thường làm bằng một đoạn gỗ hoặc một thỏi chất rắn nặng.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chú ( người)\",\n            \"_word\": \"chu ( nguoi)\",\n            \"description\": \"Em trai của cha (có thể dùng để xưng gọi).\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chăn (cái chăn)\",\n            \"_word\": \"chan (cai chan)\",\n            \"description\": \"Đồ dùng bằng vải, len, dạ, v.v. may, dệt thành tấm để đắp cho ấm.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chân dung\",\n            \"_word\": \"chan dung\",\n            \"description\": \"Tác phẩm hội hoạ, điêu khắc, nhiếp ảnh thể hiện đúng diện mạo, thần sắc, hình dáng (một người nào đó).\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chân đất\",\n            \"_word\": \"chan dat\",\n            \"description\": \"Chân đi không, không mang giày dép.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chân tay\",\n            \"_word\": \"chan tay\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất dẻo\",\n            \"_word\": \"chat deo\",\n            \"description\": \"Chất có khả năng tạo hình dưới tác dụng của nhiệt độ và áp suất, sau đó giữ nguyên hình dạng đã tạo.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất đốt\",\n            \"_word\": \"chat dot\",\n            \"description\": \"Chất khi cháy toả ra nhiều nhiệt, dùng trong đời sống và công nghiệp, như để đun, chạy máy, v.v.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất độc\",\n            \"_word\": \"chat doc\",\n            \"description\": \"Chất làm phá huỷ, ức chế hoặc làm chết cơ thể sống.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất hữu cơ\",\n            \"_word\": \"chat huu co\",\n            \"description\": \"Tên gọi chung các hợp chất của các bon tạo nên cơ thể của động vật và thực vật; phân biệt với chất vô cơ.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất lỏng\",\n            \"_word\": \"chat long\",\n            \"description\": \"Chất ở trạng thái có thể chảy được, có thể tích nhất định và có hình dạng tuỳ thuộc vào vật chứa.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất lượng\",\n            \"_word\": \"chat luong\",\n            \"description\": \"Cái tạo nên phẩm chất, giá trị của một sự vật, sự việc.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất rắn\",\n            \"_word\": \"chat ran\",\n            \"description\": \"Chất ở trạng thái luôn luôn có hình dạng và thể tích nhất định, không tuỳ thuộc vào vật chứa.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chất thải\",\n            \"_word\": \"chat thai\",\n            \"description\": \"Rác và các vật bỏ đi sau một quá trình sử dụng, nói chung.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"Châu Á Thái Bình Dương\",\n            \"_word\": \"chau a thai binh duong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"Châu Đại Dương\",\n            \"_word\": \"chau dai duong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chậu\",\n            \"_word\": \"chau\",\n            \"description\": \"Đồ dùng thường làm bằng sành sứ, nhựa hoặc kim loại, miệng rộng, lòng nông, dùng để đựng nước, tắm giặt, hoặc để trồng cây, v.v.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chè đỗ đỏ\",\n            \"_word\": \"che do do\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chén\",\n            \"_word\": \"chen\",\n            \"description\": \"Đồ dùng để uống nước, uống rượu, thường bằng sành, sứ, nhỏ và sâu lòng.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chi hội\",\n            \"_word\": \"chi hoi\",\n            \"description\": \"Chi nhánh hoặc tổ chức cơ sở của hội.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chi tiết\",\n            \"_word\": \"chi tiet\",\n            \"description\": \"Điểm nhỏ, phần rất nhỏ trong nội dung sự việc hoặc hiện tượng.\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chỉ khâu\",\n            \"_word\": \"chi khau\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chị\",\n            \"_word\": \"chi\",\n            \"description\": \"Người phụ nữ cùng một thế hệ trong gia đình, trong họ, nhưng thuộc hàng hoặc vai trên, trong quan hệ với em của mình (có thể dùng để xưng gọi).\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chị chồng\",\n            \"_word\": \"chi chong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"chị dâu\",\n            \"_word\": \"chi dau\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        },\n        {\n            \"word\": \"Chi-lê (nước Chi-lê)\",\n            \"_word\": \"chi-le (nuoc chi-le)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\"\n        }," },
        { text: "output: " },
    ];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    console.log(result.response.text());
}

run();