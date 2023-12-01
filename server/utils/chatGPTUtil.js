require("dotenv").config();
const axios = require("axios");
const Yup = require("yup");

const CHATGPT_END_POINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_MODEL  = "gpt-3.5-turbo";

const config = {
    headers: {
        Authorization: `Bearer ${process.env.CHATGPT_API_KEY}`,
    },
};

const buildConversation = (contextMessage, conversation) => {
    return [contextMessage, ...conversation]; 
    
};

const postChatGPTMessage = async (contextMessage, conversation) => {
    const messages = buildConversation(contextMessage, conversation); 
    const chatGPTData = {
        model: CHATGPT_MODEL,
        messages: messages, 
    };

    try {
        const resp = await axios.post(CHATGPT_END_POINT, chatGPTData, config);
        const data = resp.data;
        
        if (data && data.choices && data.choices.length > 0) {
            const message = data.choices[0].message; 
            return message;
        }
        return null;
    } catch(error) {
        console.error("Error with CHATGPT API");
        console.error(error);
        return null;
    }
};

const conversationSchema = Yup.object().shape({
    role: Yup.string().required("Role is required"),
    content: Yup.string().required("Content is required"), // Опечатка исправлена
});

const requestSchema = Yup.object().shape({
    context: Yup.string().required(),
    message: Yup.string().required(),
    conversation: Yup.array().of(conversationSchema).notRequired(),
});

const isValidRequest = (request) => {
    try {
        requestSchema.validateSync(request);
        return true;   
    } catch (error) {
        console.error(error);
        return false;
    }
};

const createMessage = (message, role) => {
    return {
        role: role,
        content: message,
    };
};

const addMessageToConversation = (message, conversation, role) => { // Ошибка в названии исправлена
    conversation.push(createMessage(message, role));
};

module.exports = {
    isValidRequest,
    createMessage, 
    addMessageToConversation, 
    postChatGPTMessage,
};